import { Observable } from 'rxjs';




export abstract class ContentEditorData {
    abstract setBehaviorContent(content: Object);
    abstract getBehaviorContent():   Observable<any>;
  }