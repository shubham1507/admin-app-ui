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
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormSaveService } from '../../../shared/form-save.service';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-create-apps',
  templateUrl: './create-apps.component.html',
  styleUrls: ['./create-apps.component.scss']
})
export class CreateAppsComponent implements OnInit {
  botForm: FormGroup;
  submitted = false;
  formErrors: any;
  appDetails: any;

  rangeFields =
    {
      'posting_frequency_packet_1': 'Posting frequency -packet 1',
      'posting_frequency_packet_2': 'Posting frequency -packet 2',
      'posting_frequency_packet_3': 'Posting frequency -packet 3',
      'hub_motor_rpm_limit': 'Hub motor RPM limit',
      'hub_motor_current_limit': 'Hub motor Current limit',
      'wheel_circumference': 'Wheel circumference',
      'steering_motor_rpm': 'Steering Motor RPM',
      'steering_motor_timeout': 'Steering motor timeout',
      'dba4_lift_motor_rpm': 'DBA4 Lift Motor RPM',
      'dba4_lift_motor_timeout': 'DBA4 Lift Motor timeout',
      'dba7_lift_motor_rpm': 'DBA7 Lift Motor RPM',
      'dba7_lift_motor_timeout': 'DBA7 Lift Motor timeout',
      'thermal_system_setpoint_low_side': 'Thermal system setpoint Low side',
      'thermal_system_setpoint_high_side': 'Thermal system setpoint High Side',
      'hysteris_high_side': 'Hysteris High side',
      'hysteris_low_side': 'Hysteris Low side',
      'battery_cutoff_limit_1': 'Battery cutoff limit 1',
      'battery_cutoff_limit_2': 'Battery cutoff limit 2',
      'usb_fps': 'USB FPS',
      'csi_fps': 'CSI FPS',
      'bot_speaker_volume': 'Bot Speaker volume'
    };


  constructor(private fb: FormBuilder, public modalRef: BsModalRef,
    public formService: FormSaveService) {
    
  }

  ngOnInit(): void {
    this.createForm();
  }

  unsorted() { }

  createForm() {
    this.botForm = this.fb.group(
      {
        type_of_application: ['', [Validators.required]],
        app_name: ['', [Validators.required]],
        app_id:[null],        
        associated_inventory: ['false', [Validators.required]],
        type_of_inventory: ['', [Validators.required]],
        one_wheel_two_wheel_mode: ['one_wheel', [Validators.required]],
        remote_auto_mode: ['remote', [Validators.required]],
        posting_frequency_packet_1: ['', [Validators.required, Validators.max(60), Validators.min(0)]],
        posting_frequency_packet_2: ['', [Validators.required, Validators.max(60), Validators.min(0)]],
        posting_frequency_packet_3: ['', [Validators.required, Validators.max(60), Validators.min(0)]],
        hub_motor_rpm_limit: ['', [Validators.required, Validators.max(300), Validators.min(0)]],
        hub_motor_current_limit: ['', [Validators.required, Validators.max(30), Validators.min(0)]],
        wheel_circumference: ['', [Validators.required, Validators.max(1000), Validators.min(0)]],
        steering_motor_rpm: ['', [Validators.required, Validators.max(150), Validators.min(0)]],
        steering_motor_timeout: ['', [Validators.required, Validators.max(10000), Validators.min(0)]],
        dba4_lift_motor_rpm: ['', [Validators.required, Validators.max(150), Validators.min(0)]],
        dba4_lift_motor_timeout: ['', [Validators.required, Validators.max(10000), Validators.min(0)]],
        dba7_lift_motor_rpm: ['', [Validators.required, Validators.max(150), Validators.min(0)]],
        dba7_lift_motor_timeout: ['', [Validators.required, Validators.max(10000), Validators.min(0)]],
        thermal_system_setpoint_low_side: ['', [Validators.required, Validators.max(50), Validators.min(0)]],
        thermal_system_setpoint_high_side: ['', [Validators.required, Validators.max(50), Validators.min(0)]],
        hysteris_high_side: ['', [Validators.required, Validators.max(50), Validators.min(0)]],
        hysteris_low_side: ['', [Validators.required, Validators.max(50), Validators.min(0)]],
        battery_cutoff_limit_1: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
        battery_cutoff_limit_2: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
        usb_fps: ['', [Validators.required, Validators.max(30), Validators.min(0)]],
        csi_fps: ['', [Validators.required, Validators.max(30), Validators.min(0)]],
        bot_speaker_volume: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
        bot_microphone_enable_disable: ['false', [Validators.required]],

        csi_resolution: ['', [Validators.required]],
        output_resolution: ['', [Validators.required]],
        usb_resolution: ['', [Validators.required]],

      },
    );

    if(_.size(this.appDetails) > 0){
      this.botForm.setValue(this.appDetails)
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
    return _.size(this.appDetails) >0;
  }

  onSubmit() {
    if (this.onValidate()) {
      // TODO: Use EventEmitter with form value
      if(this.botForm.value.bot_id == null)
        delete this.botForm.value.bot_id;
      
      this.formService.saveForm('apps', this.botForm.value, _.size(this.appDetails) > 0).subscribe(data => {
        console.log(data)
      })
    }
  }

}

