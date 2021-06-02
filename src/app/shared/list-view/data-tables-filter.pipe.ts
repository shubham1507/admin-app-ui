import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sharedDataFilter',
})
export class sharedDataFilterPipe implements PipeTransform {
  transform(array: any[], query: string): any {
    // if (query) {
    //   return _.filter(array, (row) => row.bot_id.indexOf(query) > -1);
    // }
    return array;
  }
}
