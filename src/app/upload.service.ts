import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {AppService} from './app.service';
import {Event} from './models/event';

@Injectable()
export class UploadService {

  constructor(private http: Http, private as: AppService) { }


  postFile(fileToUpload: File, event: Event): Observable<boolean> {
    const url = this.as.rootUrl + '/api/v1/events/' + event._id + '/upload';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    formData.append('creationTime', new Date().toDateString());
    return this.http
      .post(url, formData)
      .map(this.extractData)
      .catch((e) => this.handleError(e));
  }

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
