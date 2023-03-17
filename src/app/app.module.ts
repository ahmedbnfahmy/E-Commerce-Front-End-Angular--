import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './Components/products/products.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ContactInfoComponent } from './Components/contact-info/contact-info.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { FormPageComponent } from './Components/form-page/form-page.component';
import { StyleBoxDirective } from './Directive/style-box.directive';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { EgpIdPipe } from './pipes/EGP id/egp-id.pipe';
import { HttpClientModule } from "@angular/common/http";
import { AdminAddNewprdComponent } from './Components/admin-add-newprd/admin-add-newprd.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { LoginLogoutComponent } from './Components/login-logout/login-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    OrderParentComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    ContactInfoComponent,
    AboutUsComponent,
    FormPageComponent,
    StyleBoxDirective,
    CustomPipePipe,
    EgpIdPipe,
    AdminAddNewprdComponent,
    UserRegisterComponent,
    LoginLogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [], //can add service to see special instatnce for this module 
  bootstrap: [AppComponent]
})
export class AppModule { }
