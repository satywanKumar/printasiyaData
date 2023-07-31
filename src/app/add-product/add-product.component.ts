import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import swal from 'sweetalert';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public mainService: MainServiceService,
    private storage: AngularFireStorage,
    private router:Router) { }

  product: any;
  imageUrl: any;
  isLoading: boolean = false;
  selectedFile: any;

  ngOnInit(): void {
    this.product = new FormGroup({
      name: new FormControl(),
      model: new FormControl(),
      cp: new FormControl(),
      sp: new FormControl(),
      place: new FormControl(),
      sell: new FormControl(),
      quantity: new FormControl(),
      date: new FormControl(),
      img: new FormControl()
    })

  }

  // data = {
  //  name:'demo',
  //  model:'ok',
  //  place:'okk',
  //  quantity:45,
  //  sell:45,
  //  cp:'455',
  //  sp:'455',
  //  date:'4444',
  // }

  onImageSelected(event: Event) {
    // console.log((event.target as HTMLInputElement).files[0]);
    const files: any = (event.target as HTMLInputElement).files
    const file = files[0];
    this.selectedFile = files[0];

    this.product.patchValue({ img: file });
    // console.log(files[0])
    this.product.get('img').updateValueAndValidity();
    console.log(this.product.value.img);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  save() {
    this.isLoading = true;
    const filePath = `images/${this.selectedFile.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.selectedFile);

    task.then(() => {
      this.storage.ref(filePath).getDownloadURL().subscribe((url) => {
        this.imageUrl = url;
        console.log('File available at: ', this.imageUrl);
        this.product.patchValue({ img: url });
        this.product.get('img').updateValueAndValidity();
        console.log('ok',this.product.value);
        this.mainService.addProduct(this.product.value).subscribe(res => {
          console.log(res);
          this.isLoading = false;
          swal("added successfully", "success");
          this.router.navigate(['/dashboard'])
        },
          (err) => {
            console.log(err);
            this.isLoading = false;
            swal("something is wrong", "error");
          }
        )
      });
    })
  }


}
