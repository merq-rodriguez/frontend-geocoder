import { PayloadJudge0 } from './../data/payload-judge0';
import { Injectable } from '@angular/core';
import { of as observableOf, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class Judge0Service  {

  constructor( private http: HttpClient) {
  }


  getLanguages(): Observable<any> {
    return this.http.get(environment.api.judge+'languages');
  }

  submission(payload: PayloadJudge0): Observable<any> {
     return this.http.post('submissions/?base64_encoded=false&wait=false', payload);
  }
  
  detailSubmission(token: string): Observable<any> {
    return this.http.get(`${'submissions'+ '/' + token + '?base64_encoded=false'}`);
  }
  


 


}

