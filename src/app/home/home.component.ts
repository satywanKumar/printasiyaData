import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import swal from 'sweetalert';
import { MatDialog } from '@angular/material/dialog';
import { SellProductComponent } from '../sell-product/sell-product.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  delete(id:any)
  {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: ["cancel","yes i am sure"],
      dangerMode: true,
      className:'swal-title'
    })
    .then((res)=>{
      if(res)
      {
        this.mainService.deleteProduct(id).subscribe(res => {
          console.log(res);
          swal({
            title: "deleted succesfully!",
            // text: "You clicked the button!",
            icon: "success",
          });
          this.getProduct()
        },
          (err) => {
            swal({
              title: "something is wrong!",
              // text: "You clicked the button!",
              icon: "error",
            });
          })
      }
    });
  }


  sellProduct(id:any)
  {
    const dialogRef = this.dialog.open(SellProductComponent, {
      width:'500px',
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(res=>{
      this.getProduct();
    })
  }
  

}
