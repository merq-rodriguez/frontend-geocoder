import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class Api {

	constructor(private http: HttpClient) { }

	public get(controller: string, params?:any) {
		return this.http.get( 
			`${environment.api + controller +'/'+params }`
		);
	}
	//Esto no tiene perdon pero mañana tengo entrega y debe funcionar como sea :P
	public getDetailSubmission(controller: string, params?:any) {
		return this.http.get( 
			`${environment.apiJudge + controller +'/'+params }`
		);
	}

	public delete(controller: string, path: string, params: any) {
		return this.http.delete(
			`${environment.api + controller +'/'+ path +'/'+ params}`
		);
	}

	public put(controller: string, path: string, params: any) {
		return this.http.put(
			`${environment.api + controller +'/'+ path}`,
			params
		);
	}

	public post(controller: string, path: string, params: any) {
		return this.http.post(
			`${environment.api + controller +'/'+ path}`, params
		);
	}
	public postSubmission(controller: string, path: string, params: any) {
		return this.http.post(
			`${environment.apiJudge + controller +'/'+ path}`, params
		);
	}
	
}