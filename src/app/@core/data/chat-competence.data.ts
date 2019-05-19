import { Observable } from 'rxjs';


export interface IChatCompetence{
  name: string;
  type: string;
  idCompetence?: number;
}

export abstract class ChatCompetenceData {
    abstract getChatCompetence():   Observable<any[]>;
    abstract findChatCompetence(idChatCompetence: number):   Observable<any>;
    abstract createChatCompetence(chat: IChatCompetence): Observable<any>;
  }