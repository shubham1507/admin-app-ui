import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormSaveService {

  constructor(private http: HttpClient) { }

  public saveForm(apiEndPoint, data, update = false) {
    if(!update){
      let endpoint = `${environment.apiURL}/${apiEndPoint}/create`;
  
      return this
        .http
        .post(endpoint, data)
    }
    else {
      let endpoint = `${environment.apiURL}/${apiEndPoint}/update`;
  
      return this
        .http
        .put(endpoint, data)
    }    
    
  }

  public changePassword(data) {
    let endpoint = `${environment.apiURL}/user/changepassword`;
  
      return this
        .http
        .put(endpoint, data)
  }

}
