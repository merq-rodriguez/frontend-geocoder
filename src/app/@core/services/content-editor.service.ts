import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, BehaviorSubject } from 'rxjs';
import { ContentEditorData } from '../data/content-editor.data';

@Injectable()
export class ContentEditorService implements ContentEditorData {
    public content;
    public subject = new BehaviorSubject(this.content);    
   // data$: Observable<any> = this.subject.asObservable();

    constructor() { }

    setBehaviorView(behave: Object) { 
        this.subject.next(behave); 
    } 
    getBehaviorView(): Observable<any> { 
        return this.subject.asObservable(); 
    }
}