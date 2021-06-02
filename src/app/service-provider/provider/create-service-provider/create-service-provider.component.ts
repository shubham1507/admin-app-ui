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
import { BsModalRef } from 'ngx-bootstrap/modal';
import { countryData } from './countries';
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
  selector: 'app-create-service-provider',
  templateUrl: './create-service-provider.component.html',
  styleUrls: ['./create-service-provider.component.scss']
})
export class CreateServiceProviderComponent implements OnInit {
  botForm: FormGroup;
  submitted = false;
  formErrors: any;
  search: string;
  errorMessage: string;
  defaultDate = new Date();
  steeringEncoderRange = _.range(-5, 6,1);
  serviceProvider: any;
  applicationSuggestions$: Observable<any>;
  statesData = countryData.states;
  
  constructor(private fb: FormBuilder, private http: HttpClient, public modalRef: BsModalRef, private formSave: FormSaveService) { }

  ngOnInit(): void {
    this.applicationSuggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.botForm.get('application_used').value);
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
    this.createForm();
  }

  onSelectState(event){
    this.botForm.patchValue({'country': event.item.country});
  }

  createForm() {
    this.botForm = this.fb.group(
      {
        first_name: ['', [Validators.required]],
        middle_name: ['', [Validators.required]],
        last_name: ['',[Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone_number: [null,[Validators.required]],
        date_joined: [null, [Validators.required]],
        application_used: [null, [Validators.required]],
        country: [null, [Validators.required]],
        state: [null, [Validators.required]],
        unique_id: [null],
        region: [null, [Validators.required]],
        address: this.fb.group({
          landmark: ['', [Validators.required]],
          town: ['', [Validators.required]],
          city: ['', [Validators.required]],
          state: ['', [Validators.required]],
          country: ['', [Validators.required]],
          code: ['', [Validators.required]]
        })
      }
    );
    if(_.size(this.serviceProvider) > 0){
      this.botForm.setValue(this.serviceProvider)
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
    return this.botForm.status === 'VALID';
  }

  updateOperation(){
    return _.size(this.serviceProvider) >0;
  }

  onSubmit() {
    
    if (this.onValidate()) {
      if(this.botForm.value.unique_id == null)
        delete this.botForm.value.unique_id;

       this.botForm.value.phone_number = this.botForm.value.phone_number.e164Number
      this.formSave.saveForm('service-provider', this.botForm.value, _.size(this.serviceProvider) > 0).subscribe(data => {
        console.log(data)
      })
      
    }
  }

}


;