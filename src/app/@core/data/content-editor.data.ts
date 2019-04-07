import { Observable } from 'rxjs';




export abstract class ContentEditorData {
    abstract setBehaviorContent(content: string);
    abstract getBehaviorContent():   Observable<any>;
  }