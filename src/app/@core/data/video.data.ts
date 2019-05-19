import { Observable } from 'rxjs';

export interface IVideo{
  idVideo?: number;
  name: string;
  description: string;
  url: string;
  idSubtheme: number;
}

export abstract class VideoData {
    abstract getVideos():   Observable<any[]>;
    abstract findVideo(idVideo: number):   Observable<any>;
    abstract createVideo(video: IVideo): Observable<any>;
    abstract updateVideo(video: IVideo): Observable<any>;
    abstract deleteVideo(idVideo: number): Observable<any>;
  }