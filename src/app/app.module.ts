import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SplashComponent } from './splash/splash.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TokenInterceptorService } from './token-interceptor.service';
import { MainServiceService } from './main-service.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { SellProductComponent } from './sell-product/sell-product.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    SellComponent,
    AddProductComponent,
    SplashComponent,
    MyNavComponent,
    SellProductComponent,
    ProductFilterPipe,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyCy9-iZDj4wEXyT0kTwerpcecEtQd0L3kc",
      authDomain: "printasiya-a13ed.firebaseapp.com",
      projectId: "printasiya-a13ed",
      storageBucket: "printasiya-a13ed.appspot.com",
      messagingSenderId: "76333116608",
      appId: "1:76333116608:web:6eef12c4511c13cc679125"
    }),
    AngularFireStorageModule

  ],
  providers: [MainServiceService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
