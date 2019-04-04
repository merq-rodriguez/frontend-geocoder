import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContentEditorService {
    public content;
    public dataStore = new BehaviorSubject(this.content);    
    data$: Observable<any> = this.dataStore.asObservable();

    constructor(private http: HttpClient) { }

    loadContent(){

    }
}