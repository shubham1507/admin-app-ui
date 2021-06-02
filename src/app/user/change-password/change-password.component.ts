import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { ValidatorFn, ValidationErrors } from '@angular/forms';
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
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  userDetails: any;
  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private http: HttpClient, public modalRef: BsModalRef, private formSave: FormSaveService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group(
      {
        old_password: ['', [Validators.required]],
        new_password: ['', [Validators.required]],
      }
    );    
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

    if (this.onValidate()) {
      
      this.formSave.changePassword(this.userForm.value).subscribe(data => {
        console.log(data)
      })
      
    }
  }

}


