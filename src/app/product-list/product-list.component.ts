import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import swal from 'sweetalert';
import { MatDialog } from '@angular/material/dialog';
import { SellProductComponent } from '../sell-product/sell-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private mainService:MainServiceService,
    private dialog:MatDialog) { }

    product:any = [];
    isLoading:boolean = false;
    searchItem:string = "";

    ngOnInit(): void {
      this.getProduct();
    }
  
    getProduct()
    {
      this.isLoading = true;
      this.mainService.getProductList().subscribe(res=>{
        this.isLoading = false;
        this.product = res.body.product.reverse()
        console.log(this.product);
      },
      err=>{
        console.log(err);
        swal("something is wrong", "error");
      }
      )
    }

    print()
    {
      window.print()
    }
  
  
  
}
