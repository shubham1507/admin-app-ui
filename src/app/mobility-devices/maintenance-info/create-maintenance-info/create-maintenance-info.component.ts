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
  selector: 'app-create-maintenance-info',
  templateUrl: './create-maintenance-info.component.html',
  styleUrls: ['./create-maintenance-info.component.scss']
})
export class CreateMaintenanceInfoComponent implements OnInit {
  botForm: FormGroup;
  submitted = false;
  formErrors: any;
  search: string;
  errorMessage: string;
  defaultDate = new Date();
  steeringEncoderRange = _.range(-5, 6,1);
  maintenanceDetails: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private formSave: FormSaveService, public modalRef: BsModalRef) { }

  ngOnInit(): void {
    this.createForm();
  }

  onSelectState(event){
    this.botForm.patchValue({'deployed_country': event.item.country});
  }

  createForm() {
    this.botForm = this.fb.group(
      {
        bot_id: ['', [Validators.required]],
        date_added: ['', [Validators.required]],
        performed_by: [
          '',
          [
            Validators.required
          ],
        ],
        remarks: ['', [Validators.required]],
        action: [null,[Validators.required]],
        downtime: ['', Validators.required],
        maintenance_id: ['']
      }
    );

    if(_.size(this.maintenanceDetails) > 0){
      this.botForm.setValue(this.maintenanceDetails)
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
    return _.size(this.maintenanceDetails) >0;
  }

  onSubmit() {

    if (this.onValidate()) {

      if(this.botForm.value.maintenance_id == null)
        delete this.botForm.value.maintenance_id;

      this.formSave.saveForm('maintenance-info', this.botForm.value, _.size(this.maintenanceDetails) > 0).subscribe(data => {
        console.log(data)
      })
    }
  }

}

