import { Injectable } from '@angular/core';
import { LanguageData, ILanguage } from '../data/language.data';
import { of as observableOf, Observable, of, BehaviorSubject } from 'rxjs';
import { Api } from './api.service';

@Injectable()
export class UploadService {

  private arrayImages: any = [];
  private arrayImagesSource = new BehaviorSubject<any>(null);
  public images$ = this.arrayImagesSource.asObservable();

  constructor(private api: Api) {}

  private controller: string = "uploads"

  addImage(file):void{
    this.arrayImages.push(file);
    this.arrayImagesSource.next(this.arrayImages);
 }

  getArrayImages(): Observable<any> { 
    return this.images$; 
}


  uploadImage(file): Observable<any> {
    return this.api.post(this.controller, 'uploadImage', file);
  }


}

