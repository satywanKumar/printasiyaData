import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(public http:HttpClient) { }
  baseUrl = "https://printasiya.vercel.app/";


  //login
  login(data:any)
  {
    const options = {
      observe: "response" as 'body',
      "responseType?": "json"
    };
    return this.http.post<any>(this.baseUrl + 'user/login', data, options);
  }

  //get product
  getProductList() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: "response" as 'body',
      "responseType?": "json"
    };

    return this.http.get<any>(this.baseUrl + 'product', options)
  }

  //get product by Id
  getProductById(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: "response" as 'body',
      "responseType?": "json"
    };

    return this.http.get<any>(this.baseUrl + 'product/' + id, options)
  }

  //add product 
  addProduct(product: any) {
    // const productData = new FormData();
    // productData.append('name', product.name);
    // productData.append('model', product.model);
    // productData.append('place', product.place);
    // productData.append('date', product.date);
    // productData.append('quantity', product.quantity);
    // productData.append('sell', product.sell);
    // productData.append('sp', product.sp);
    // productData.append('cp', product.cp);
    // productData.append('photo', product.photo);
    console.log('service',product)
    const options = {
      observe: "response" as 'body',
      "responseType?": "json"
    };

    return this.http.post<any>(this.baseUrl + 'product', product, options);
  }

    //add product 
    updateProduct(data: any,id:any) {
     
      
      const options = {
        observe: "response" as 'body',
        "responseType?": "json"
      };
  
      return this.http.patch<any>(this.baseUrl + 'product/'+id, data, options);
    }

  //delete product

  deleteProduct(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: "response" as 'body',
      "responseType?": "json"
    };

    return this.http.delete<any>(this.baseUrl + 'product/' + id, options)
  }

  isLogin()
  {
    if(localStorage.getItem('token') == null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  
}
