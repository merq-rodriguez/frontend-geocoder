import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, BehaviorSubject } from 'rxjs';
import { ContentEditorData } from '../data/content-editor.data';

@Injectable()
export class ContentEditorService implements ContentEditorData {
    private content = '';
    private contentSource = new BehaviorSubject<any>(null);    
    public content$ = this.contentSource.asObservable();

    constructor() { }

    reset(){
        this.content = '';
        this.contentSource.next(null); 

    }

    setContent(content: string) { 
        this.content = content;
        this.contentSource.next(this.content); 
    } 

    getContent(): Observable<any> { 
        return this.content$; 
    }
}