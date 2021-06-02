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
import { FormSaveService } from '../../shared/form-save.service';

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
  selector: 'app-create-remote-operator',
  templateUrl: './create-remote-operator.component.html',
  styleUrls: ['./create-remote-operator.component.scss']
})
export class CreateRemoteOperatorComponent implements OnInit {
  botForm: FormGroup;
  submitted = false;
  formErrors: any;
  search: string;
  errorMessage: string;
  defaultDate = new Date();
  steeringEncoderRange = _.range(-5, 6,1);
  remoteOperator: any;
  applicationSuggestions$: Observable<any>;

  constructor(private fb: FormBuilder, private http: HttpClient, public modalRef: BsModalRef, private formSave: FormSaveService) { }

  ngOnInit(): void {
    this.createForm();
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
        mac_id: [null, [Validators.required, Validators.pattern('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})|([0-9a-fA-F]{4}\\.[0-9a-fA-F]{4}\\.[0-9a-fA-F]{4})$')]],        
        unique_id: [null],
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
    if(_.size(this.remoteOperator) > 0){
      this.botForm.setValue(this.remoteOperator)
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
    return _.size(this.remoteOperator) >0;
  }

  onSubmit() {

    if (this.onValidate()) {
      if(this.botForm.value.unique_id == null)
        delete this.botForm.value.unique_id;
        
      this.botForm.value.phone_number = this.botForm.value.phone_number.e164Number
      this.formSave.saveForm('remote-operator', this.botForm.value, _.size(this.remoteOperator) > 0).subscribe(data => {
        console.log(data)
      })
    }
  }

}


