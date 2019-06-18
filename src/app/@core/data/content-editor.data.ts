import { Observable } from 'rxjs';




export abstract class ContentEditorData {
    abstract setContent(content: string);
    abstract getContent():   Observable<any>;
  }