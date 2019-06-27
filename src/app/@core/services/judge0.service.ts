import { PayloadJudge0 } from './../data/payload-judge0';
import { Injectable } from '@angular/core';
import { of as observableOf, Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class Judge0Service  {

  private token: any;
  private tokenSource = new BehaviorSubject<any>(null);
  public  token$ = this.tokenSource.asObservable();


  constructor( private http: HttpClient) {}

  setToken(token: string){
    this.token = token;
    this.tokenSource.next(this.token);
  }

  unsubscribe(){
    this.tokenSource.unsubscribe();
  }

  getLanguages(): Observable<any> {
    return this.http.get(environment.api.judge+'languages');
  }

  submission(payload: PayloadJudge0): Observable<any> {
     return this.http.post(environment.api.judge+'submissions/?base64_encoded=false&wait=false', payload);
  }
  
  detailSubmission(token: string): Observable<any> {
    return this.http.get(environment.api.judge+'submissions/' + token + '?base64_encoded=false');
  }
  


 


}

