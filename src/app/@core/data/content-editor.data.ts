import { Observable } from 'rxjs';




export abstract class ContentEditorData {
    abstract setBehaviorView(behave: Object);
    abstract getBehaviorView():   Observable<any>;
  }