import { Query } from './../models/query.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) {}

  selectedQuery: Query = {
     query_title: '',
     query_content: '',
     query_type: '',
     query_createdby: ''
  };
// query_id: String, query_title: String, query_content: String, query_createdby: String, query_type: String
  // createQuery(query: Query): Observable<Query>{
  //     return this.http.post<Query>(environment.apiBaseUrl, {
  //       'query_id': query_id,
  //       'query_title': query_title,
  //       'query_content': query_content,
  //       'query_createdby': query_createdby,
  //       'query_type': query_type
  //     });
  // }

  // postQuery(query: Query) {

  //   return this.http.post(`${environment.apiBaseUrl}/queries`, query);
  // }
  // post new query
  postQuery(req: any) {

    return this.http.post(`${environment.apiBaseUrl}/queries`, req);
  }
  // get all queries
  getQueries() {
    return this.http.get(`${environment.apiBaseUrl}/queries`);
  }
}
