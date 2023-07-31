import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import swal from 'sweetalert';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SellProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public mainService:MainServiceService) { }

  number:any;
  inputData:any;
  id:any;

  ngOnInit(): void {
    this.id = this.data.id;
    this.mainService.getProductById(this.data.id).subscribe(res=>{
      console.log(res.body.product[0].sell);
      this.number= res.body.product[0].sell;
    })

  }

  sellProduct()
  {
    const sellData = {
      sell:parseInt(this.inputData,10) + parseInt(this.number,10)
    }
    console.log(sellData.sell)
    this.mainService.updateProduct(sellData,this.id).subscribe(res=>{
      console.log(res);
      this.dialogRef.close();
      swal("done successfully", "success");
    },
    err=>{
      this.dialogRef.close();
      swal("something is wrong", "error");
      console.log(err);
    }
    )
  }

}
