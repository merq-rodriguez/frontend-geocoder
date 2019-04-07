import { Injectable } from '@angular/core';
import { of as observableOf ,Observable, BehaviorSubject } from 'rxjs';
import { ThemeListData } from '../data/theme-list.data';

@Injectable()
export class ThemeListService implements ThemeListData  {
    private listSource = new BehaviorSubject<Object>({});    
    public list$ = this.listSource.asObservable();

    constructor() { }

    setBehaviorListTheme(list: Object) { 
        this.listSource.next(list); 
    } 
    getBehaviorListTheme(): Observable<any> { 
        return this.list$; 
    }
}