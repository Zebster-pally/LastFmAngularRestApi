export interface IAlbumsData {
  albums: IAlbums
}

export interface IAlbums {
  album: IAlbum[]
}

export interface IAlbum {
  name: string,
  artist: IAlbumArtist,
  image: IAlbumImage[],
  favorite: boolean
}

export interface IAlbumArtist {
  name: string
}

export interface IAlbumImage {
  '#text': string,
  size: string
}
