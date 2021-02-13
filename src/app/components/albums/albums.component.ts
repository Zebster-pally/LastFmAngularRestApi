import { Component, OnInit } from '@angular/core';
import { IAlbum } from '../../models/album.model';
import { AlbomsService } from '../../services/albums.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FavoriteAlbumsService } from 'src/app/services/favorite-albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  search: string = '';

  badgeCount: number;

  genre: string;

  albums: IAlbum[] = []

  constructor(
    private albumsService: AlbomsService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private favoriteAlbumsService: FavoriteAlbumsService) {
    this.genre = this.activatedRoute.snapshot.params.genre;
    this.badgeCount = 0;
  }

  ngOnInit(): void {
    this.albumsService.getByGenre(this.genre).subscribe((data) => {
      this.albums = data;
      const favoriteAlbums = this.favoriteAlbumsService.get();
      for (let i = 0; i < this.albums.length; i++) {
        if(favoriteAlbums.find(x => x.name == this.albums[i].name)) {
          this.albums[i].favorite = true
          this.badgeCount++;
        }
      }
    })
  }

  openSnackBar(album: IAlbum): void {
    if (!album.favorite) {
      this._snackBar.open(`Added to favorite - ${album.name}`, 'Like', {
        duration: 2000,
      });
      this.badgeCount++;
      this.favoriteAlbumsService.add(album)
    } else {
      this._snackBar.open(`Deleted from favorite - ${album.name}`, 'Close', {
        duration: 2000,
      });
      this.badgeCount--;
      this.favoriteAlbumsService.delete(album)
    }
  }
}
