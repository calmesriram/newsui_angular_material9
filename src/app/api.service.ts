import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { localconfig,serverconfig } from '../assets/appconfig';

declare var require: any;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // public baseurl: String = localconfig.localserver;
  public baseurl: String = serverconfig.serverurl;  
  constructor(public http: HttpClient) {

  }
  addnew(data) {
    return new Promise((resolve,reject) => {
      this.http.post(this.baseurl+"/addnews", data).subscribe(res => {
        resolve(res);
      }, err => {
        resolve(err);
      })
    })
  }
  allnews() {
    return new Promise((resolve,reject) => {
      this.http.get(this.baseurl+"/allnews").subscribe(res => {
        resolve(res);
      }, err => {
        resolve(err);
      })
    })
  }
  updatenews(data) {
    return new Promise((resolve,reject) => {
      this.http.put(this.baseurl+"/updatenews", data).subscribe(res => {
        resolve(res);
      }, err => {
        resolve(err);
      })
    })
  }
  deletenews(data) {
    return new Promise((resolve,reject) => {
      this.http.delete(this.baseurl+"/deletenews/"+data).subscribe(res => {
        resolve(res);
      }, err => {
        resolve(err);
      })
    })
  }
}
