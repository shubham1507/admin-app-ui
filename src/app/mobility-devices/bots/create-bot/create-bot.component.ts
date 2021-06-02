import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  FormGroupName,
} from '@angular/forms';

import { ValidatorFn, ValidationErrors } from '@angular/forms';
import { noop, Observable, Observer, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import * as _ from 'lodash'; 
import { countryData }  from "./countries";
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormSaveService } from '../../../shared/form-save.service';

export const confirmPasswordValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get('password');
  const confirm = control.get('confirmPassword');
  return password && confirm && password.value === confirm.value
    ? null
    : { passwordMismatch: true };
};

@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.scss'],
})

export class CreateBotComponent implements OnInit {
  botForm: FormGroup;
  submitted = false;
  formErrors: any;
  search: string;
  applicationSuggestions$: Observable<any>;
  serviceProviderSuggestions$: Observable<any>;
  errorMessage: string;
  defaultDate = new Date();
  steeringEncoderRange = _.range(-5, 6,1);
  statesData = countryData.states;
  botDetails: any;

  constructor(private fb: FormBuilder,
    private http: HttpClient, 
    public modalRef: BsModalRef,
    private formSave: FormSaveService ) {
   
  }

  ngOnInit(): void {
    this.applicationSuggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.botForm.get('associated_application').value);
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          return this.http.get<any>(
            'http://3.7.230.113:4000/Genieminds/apps/search', {
            params: { "searchParam": query }
          }).pipe(
            map((data) => data['data'] && data['data']['apps']),
          );
        }
 
        return of([]);
      })
    );
    this.serviceProviderSuggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.botForm.get('associated_service_provider').value);
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          return this.http.get<any>(
            'http://3.7.230.113:4000/Genieminds/service-provider/search', {
            params: { "searchParam": query }
          }).pipe(
            map((data) => data['data'] && data['data']['service_provider']),
          );
        }
 
        return of([]);
      })
    );
    this.createForm();
  }

  onSelectAssocitedApp(event){
    this.botForm.patchValue({'associated_application': event.item.app_name});
  }

  onSelectState(event){
    this.botForm.patchValue({'deployed_country': event.item.country});
  }

  createForm() {
    this.botForm = this.fb.group(
      {
        bot_id: ['', [Validators.required]],
        associated_application: ['', [Validators.required]],
        associated_service_provider: [
          '',
          [
            Validators.required
          ],
        ],
        deployed_country: ['', [Validators.required]],
        deployed_state: [null,[Validators.required],
        ],
        deployed_region: [null, [Validators.required]],
        deployed_date: [null, [Validators.required]],
        ip_address: [null, [Validators.required, Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')]],
        steering_enoder_calibration: [0,[Validators.required]]
      }
    );
    if(_.size(this.botDetails) > 0){
      this.botForm.setValue(this.botDetails)
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.botForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.botForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.botForm.status === 'VALID';
  }

  updateOperation(){
    return _.size(this.botDetails) >0;
  }

  onSubmit() {
    this.formSave.saveForm('bot', this.botForm.value, _.size(this.botDetails) > 0).subscribe(data => {
      console.log(data)
    })
  }

}

