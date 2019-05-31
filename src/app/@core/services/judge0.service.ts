import { PayloadJudge0 } from './../data/payload-judge0';
import { Injectable } from '@angular/core';
import { of as observableOf, Observable, of } from 'rxjs';
import { Api } from './api.service';

@Injectable()
export class Judge0Service  {

  constructor( private api: Api) {
  }

  private controller: string = "submissions"

  getLanguages(): Observable<any> {
    return this.api.get('languages')
  }

  submission(payload: PayloadJudge0): Observable<any> {
    return this.api.postSubmission(this.controller , '?base64_encoded=false&wait=false', payload);
  }
  
  detailSubmission(token: string): Observable<any> {
    return this.api.getDetailSubmission(this.controller+ `${'/' + token + '?base64_encoded=false'}`);
  }
  


 


}

