import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, BehaviorSubject } from 'rxjs';
import { MonacoData } from '../data/monaco.data';
import { MonacoFile } from 'ngx-monaco';

@Injectable()
export class MonacoService implements MonacoData {
    private content = '';
    private contentSource = new BehaviorSubject<any>(null);    
    public  content$ = this.contentSource.asObservable();
    private fileSource = new BehaviorSubject<MonacoFile>(null);    
    public  file$ = this.fileSource.asObservable();

    constructor() { 
        this.setMonacoFile(this.file);
    }

    file: MonacoFile = {
        uri: "index.js",
        language: "javascript",
        content: `console.log('Escribe aqui tu codigo...')`
    };

    setMonacoContent(content):void{
        this.content = content;
        this.contentSource.next(this.content);
    }

    setMonacoFile(file: MonacoFile):void{
        this.file = file;
        this.fileSource.next(file);
    }

    reset():void{
        let file = {
            uri: "index.js",
            language: "javascript",
            content: `console.log('Escribe aqui tu codigo...')`
        };
        this.fileSource.next(file);
    }

   
    getMonacoFile(): Observable<any> { 
        return this.file$; 
    }
}