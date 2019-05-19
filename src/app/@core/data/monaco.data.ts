import { Observable } from 'rxjs';




export abstract class MonacoData {
    abstract setContentMonaco(content: string):void;
    abstract getContentMonaco():   Observable<any>;
  }