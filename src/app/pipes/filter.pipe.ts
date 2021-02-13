import { Pipe, PipeTransform } from '@angular/core';
import { IAlbum } from '../models/album.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IAlbum[], searchValue: string): IAlbum[] {
    if (!searchValue) return value;
    return value.filter((v) => v.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
  }
}
