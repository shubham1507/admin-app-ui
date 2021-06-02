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
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  formErrors: any;
  search: string;
  errorMessage: string;
  defaultDate = new Date();
  steeringEncoderRange = _.range(-5, 6,1);
  userDetails: any;
  applicationSuggestions$: Observable<any>;
  updateAction =  false;

  constructor(private fb: FormBuilder, private http: HttpClient, public modalRef: BsModalRef, private formSave: FormSaveService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group(
      {
        first_name: ['', [Validators.required]],
        last_name: ['',[Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        mobile_number: [null,[Validators.required]],        
        role: [null, [Validators.required]],
        password: [null, [Validators.required]]
      }
    );
    
    if(_.size(this.userDetails) > 0){
      this.updateAction = true;
      this.userForm.removeControl('password');
      this.userForm.setValue(this.userDetails)
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.userForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }

  onValidate() {
    this.submitted = true;
    return this.userForm.status === 'VALID';
  }

  onSubmit() {
    if(this.onValidate()){
      this.userForm.value.mobile_number = this.userForm.value.mobile_number.e164Number;
      this.formSave.saveForm('user', this.userForm.value, _.size(this.userDetails) > 0).subscribe(data => {
      })
    }
    
  }

  isUpdateOperation(){
    return _.size(this.userDetails) > 0;
  }

}


