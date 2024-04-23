// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'maidsfilter' })
export class FilterPipe implements PipeTransform {
 
   /* @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it?.['id'].toString().toLocaleLowerCase().includes(searchText) || it?.['first_name'].toLocaleLowerCase().includes(searchText) || it?.['last_name'].toLocaleLowerCase().includes(searchText);
    });
  }
}