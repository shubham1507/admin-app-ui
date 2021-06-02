import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  FormGroupName,
} from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { ChargingStationFormsService } from './validation-forms.service';
import * as _ from 'lodash';
import { FormSaveService } from '../../../shared/form-save.service';

@Component({
  selector: 'app-create-charging-station',
  templateUrl: './create-charging-station.component.html',
  styleUrls: ['./create-charging-station.component.scss'],
  providers: [ChargingStationFormsService]
})
export class CreateChargingStationComponent implements OnInit {
  chargingStationForm: FormGroup;
  submitted = false;
  stationDetails: any;
  currentStatus = ['Available', 'Charging', 'Unavailable'];


  constructor(private fb: FormBuilder, public vf: ChargingStationFormsService, private formSave: FormSaveService,
    public modalRef: BsModalRef) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.chargingStationForm = this.fb.group(
      {
        station_label: ['', [Validators.required]],
        current_status: ['', [Validators.required]],
        locked_to_a_service_provider: ['false', [Validators.required]],
        service_provider_id: ['',[Validators.required]],
        station_id: [''],
        location: ['',[Validators.required]],
      }
    );
    if(_.size(this.stationDetails) > 0){
      this.chargingStationForm.setValue(this.stationDetails)
    }

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.chargingStationForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.chargingStationForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.chargingStationForm.status === 'VALID';
  }

  updateOperation(){
    return _.size(this.stationDetails) >0;
  }

  onSubmit() {
    if (this.onValidate()) {
      if(this.chargingStationForm.value.station_id == null)
        delete this.chargingStationForm.value.station_id;

      // TODO: Use EventEmitter with form value
      this.formSave.saveForm('charging-stations', this.chargingStationForm.value, _.size(this.stationDetails) > 0).subscribe(data => {
        console.log(data)
      })
    }
  }

}

