import { Injectable, Input } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Response, Headers } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { AppService } from '../app.service';

@Injectable()
export class EventService {

  constructor(private http: Http, private as: AppService) { }

  getEvents(): Observable<any> {
    return this.http.get(this.as.rootUrl + '/api/v1/events')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEvent(id: any): Observable<any> {
    return this.http.get(this.as.rootUrl + '/api/v1/events/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEventFiles(id: any) {
    return this.http.get(this.as.rootUrl + '/api/v1/events/' + id + '/vidoes')
      .map(this.extractData)
      .catch(this.handleError);
  }
  createEvent(event: any): Observable<any> {

    const headersLocal = new Headers();

    headersLocal.append('content-type', 'application/json');

    return this.http.post(this.as.rootUrl + '/events', event, { headers: headersLocal })
      .map(this.extractData)
      .catch(this.handleError);
  }

  //parse response to json
  extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  //handle response error
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
