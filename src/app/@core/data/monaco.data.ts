import { Observable } from 'rxjs';
import { MonacoFile } from 'ngx-monaco';




export abstract class MonacoData {
    abstract setMonacoFile(file: MonacoFile):void;
    abstract getMonacoFile():   Observable<any>;
  }