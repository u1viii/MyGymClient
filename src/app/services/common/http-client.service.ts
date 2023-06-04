import { Inject,Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient, @Inject("baseUrl") private baseUrl : string) { }

  private url(request : Partial<RequestParameters>) : string{
    return `${request.baseUrl ? request.baseUrl : this.baseUrl}/${request.controller}${request.action ? `/${request.action}`:''}`;
  }
  get<T>(request:RequestParameters, id? : number) : Observable<T>{
    let url : string = request.fullEndPoint ? request.fullEndPoint : this.url(request) + (id? `/${id}` : '');
    return this.http.get<T>(url, {headers:request.headers})
  }
  post<T>(request:Partial<RequestParameters>, body: Partial<T>) : Observable<T>{
    let url : string = request.fullEndPoint ? request.fullEndPoint : this.url(request);
    return this.http.post<T>(url, body, {headers:request.headers});
  }
  put<T>(request:Partial<RequestParameters>, body : Partial<T>) : Observable<T>{
    let url : string = request.fullEndPoint ? request.fullEndPoint : this.url(request);
    return this.http.put<T>(url, body, {headers:request.headers});
  }
  delete<T>(request: Partial<RequestParameters>, id : Number): Observable<T>{
    let url : string = request.fullEndPoint ? request.fullEndPoint : this.url(request) + (id? `/${id}` : '');
    // let url : string = request.fullEndPoint ? request.fullEndPoint : this.url(request)+'/'+id;
    return this.http.delete<T>(url,{headers:request.headers})
  }
}
export class RequestParameters{
  controller? : string;
  action? : string;

  headers? : HttpHeaders;
  baseUrl? : string;
  fullEndPoint? : string;
}