import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAlbum, IAlbumsData } from '../models/album.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbomsService {

  constructor(private http: HttpClient) { }

  apiUrl = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums`;

  getByGenre(genre: string): Observable<IAlbum[]> {
    return this.http.get<IAlbumsData>(`${this.apiUrl}&tag=${genre}&api_key=${environment.api_key}&format=json`).pipe(
      map(data => data.albums.album)
    )
  }
}
