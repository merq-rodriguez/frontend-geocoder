import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class Api {

	constructor(private http: HttpClient) { }

	public get(controller: string, params?:Array<any>) {
		return this.http.get( 
			`${environment.api + controller}`
		);
	}

 

	public delete(controller: string, path: string) {
		return this.http.delete(
			`${environment.api + controller + path}`
		);
	}

	public put(controller: string, path: string, params: any) {
		return this.http.put(
			`${environment.api + controller + path}`,
			params
		);
	}

	public post(controller: string, path: string, params: any) {
		return this.http.post(
			`${environment.api + controller + path}`, params
		);
	}
}