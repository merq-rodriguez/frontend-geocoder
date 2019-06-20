import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class Api {

	constructor(private http: HttpClient) { }
	public get(controller: string, params?:any) {
		return this.http.get( `${environment.api.geoprogram + controller +'/'+params }`
		);
	}
	

	public delete(controller: string, path: string, params: any) {
		return this.http.delete(
			`${environment.api.geoprogram + controller +'/'+ path +'/'+ params}`
		);
	}

	public put(controller: string, path: string, params: any) {
		return this.http.put(
			`${environment.api.geoprogram + controller +'/'+ path}`,
			params
		);
	}

	public post(controller: string, path: string, params: any) {
		return this.http.post(
			`${environment.api.geoprogram + controller +'/'+ path}`, params
		);
	}
	
	
}