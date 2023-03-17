import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AdminAddNewprdComponent } from './Components/admin-add-newprd/admin-add-newprd.component';
import { ContactInfoComponent } from './Components/contact-info/contact-info.component';
import { FormPageComponent } from './Components/form-page/form-page.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginLogoutComponent } from './Components/login-logout/login-logout.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { AuthGuard } from './gaurds/auth.guard';
// Day4
// array of objects
const routes: Routes = [ // first-match wins 
   {path:'',component:MainLayoutComponent,children:[ // child roots 
    {path:'',redirectTo:'/Home',pathMatch:'full'},//Default path
    {path:'Home',component:HomeComponent,title:'Home page'},
    {path:'Order',component:OrderParentComponent,title:'Order page',canActivate:[AuthGuard] },
    {path:'aboutUS',component:AboutUsComponent,title:'aboutUS'},
    {path:'contactInfo',component:ContactInfoComponent,title:'ConractInfo'},
    {path:'form-page',component:FormPageComponent,title:'form page'},
    {path:'newProducts',component:AdminAddNewprdComponent,title:'new Product page'},
    {
      path: 'product',  // this is for lazyload 
      loadChildren: () => import('src/app/Components/product/product.module').then(m =>m.ProductModule)
    },
  ]},
  {path:'Login',component:LoginLogoutComponent,title:'login'},
  {path:'LoginOut',component:LoginLogoutComponent,title:'login'},
  {path:'register',component:UserRegisterComponent,title:'user register'},
  {path:'**',component:NotFoundComponent},//not found path //wildcard path // anything else go to this  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
