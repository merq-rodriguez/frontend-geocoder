import { Observable } from 'rxjs';


export interface IMessageInbox{
  text: string;
  idUserIssuing: number;
  idUserReceptor: number;
}

export interface IMessageCompetence{
  text: string;
  idChatCompetence: number;
  idUser: number;
}

export abstract class ChatCompetenceData {
    abstract getMessageChatCompetence(idChatCompetence: number):   Observable<any[]>;
    abstract getMessageInbox(idUserA: number, idUserB: number):   Observable<any>;
    abstract sendMessageCompetence(message:  IMessageCompetence): Observable<any>;
    abstract sendMessageInbox(message:  IMessageInbox): Observable<any>;
  }