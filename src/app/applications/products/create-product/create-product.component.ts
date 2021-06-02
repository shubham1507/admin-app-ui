import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormSaveService } from '../../../shared/form-save.service';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit, AfterViewInit {
  botForm: FormGroup;
  submitted = false;
  formErrors: any;
  maintenanceInfoDetails: any;
  bucketName = 'Genieminds-product-images-bucket';

  uploader: any;

  constructor(private fb: FormBuilder, public bsModalRef: BsModalRef,  private formSave: FormSaveService) {
    
  }

  ngOnInit(): void {
    this.createForm();
  }

  /*fileEvent(fileInput: any) {
    var AWSService = AWS;

    var file = fileInput.target.files[0];

    AWSService.config.accessKeyId = "AKIA3BA5VRH3QKPRV7OA";

    AWSService.config.secretAccessKey = "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";

    var bucket = new AWSService.S3({ params: { Bucket: "Genieminds-product-images-bucket" } });

    var params = { Key: file.name, Body: file };

    bucket.upload(params, function(err, data) {
      console.log(err, data);
    });
  }*/

  ngAfterViewInit(){
  }

  createForm() {
    this.botForm = this.fb.group(
      {
        product_id: [null],
        product_name: ['', [Validators.required]],
        type_of_product:['', [Validators.required]],
      },
    );

    if(_.size(this.maintenanceInfoDetails) > 0){
      this.botForm.setValue({
        product_name: this.maintenanceInfoDetails.product_name,
        type_of_product: this.maintenanceInfoDetails.type_of_product,
        product_id: this.maintenanceInfoDetails.product_id
      })
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
    return _.size(this.maintenanceInfoDetails) >0;
  }

  onSubmit() {

    if (this.onValidate()) {
      this.formSave.saveForm('products', this.botForm.value, _.size(this.maintenanceInfoDetails) > 0).subscribe(data => {
        console.log(data)
      })
    }
  }

}

