import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { MainServiceService } from './main-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any,next:any)
  {
    let mainService = this.injector.get(MainServiceService);
    let tokenizedReq = req.clone(
      {
        headers:req.headers.set('Authorization','Bearer '+ localStorage.getItem('token'))
      }
    )
    return next.handle(tokenizedReq)
  }
}