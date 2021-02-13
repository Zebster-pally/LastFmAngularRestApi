import { Injectable } from '@angular/core';
import { IAlbum } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteAlbumsService {

  constructor() { }

  get(): IAlbum[] {
    let data = localStorage.getItem('favorites')
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }

  add(album: IAlbum): void {
    let data:IAlbum[] = this.get();
    data.push(album);
    localStorage.setItem('favorites', JSON.stringify(data));
  }

  delete(album: IAlbum): void {
    let data:IAlbum[] = this.get();
    let index = data.indexOf(album);
    data.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(data));
  }
}
