import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private fname: string;

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File, fname: string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file, fname );

    const req = new HttpRequest('POST', 'http://localhost:8181/post', formdata, {
      reportProgress: true  ,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  pushFileToStoragePhotoUser(file: File, fname: string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file, fname );

    const req = new HttpRequest('POST', 'http://localhost:8181/postUserPhoto', formdata, {
      reportProgress: true  ,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  pushFileToStoragePhotoAnnonce(file: File, fname: string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file, fname );

    const req = new HttpRequest('POST', 'http://localhost:8181/postAnnoncePhoto', formdata, {
      reportProgress: true  ,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('/localhost:8181/files');
  }
}
