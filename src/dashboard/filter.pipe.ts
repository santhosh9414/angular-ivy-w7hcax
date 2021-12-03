import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: string[], filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }

    const result = resultArray.reduce((acc, curr) => {
      const objInAcc = acc.find((o) => o.name === curr.name);
      !objInAcc ? acc.push(curr) : (objInAcc.status += `, ${curr.status}`);
      return acc;
    }, []);
    
    return result;
  }
}
