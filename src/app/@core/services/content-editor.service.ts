import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, BehaviorSubject } from 'rxjs';
import { ContentEditorData } from '../data/content-editor.data';

@Injectable()
export class ContentEditorService implements ContentEditorData {
    private contentSource = new BehaviorSubject<Object>({});    
    public content$ = this.contentSource.asObservable();

    constructor() { }

    setBehaviorContent(content: Object) { 
        this.contentSource.next(content); 
    } 
    getBehaviorContent(): Observable<any> { 
        return this.content$; 
    }
}