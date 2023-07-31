import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products:any[], searchItem:string): any {
    console.log(products,searchItem);
    if(searchItem == undefined)
    {
      return products;
    }
    return products.filter(products=>products.name.toLowerCase().indexOf(searchItem.toLocaleLowerCase()) !== -1);
  }

}
