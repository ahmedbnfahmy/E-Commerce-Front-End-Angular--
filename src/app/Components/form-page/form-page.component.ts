import { Component, EventEmitter, Output } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})



export class FormPageComponent {

  addedPrd:any
productList:Iproduct[]=[]
catList:Icategory[]=[]
@Output() addedPrdEV:EventEmitter<any>
  // prdLista:Iproduct [] = [];
  constructor(private prdService:ProductService, private prdAPIServ:ProductApiService ) {

  this.addedPrdEV=new EventEmitter<any>;
    // this.productList=prdService.productList

  }
  addPrd(
    id: any,
    prdName: any,
    price: any,
    quantity: any,
    catID: any,
    imgURL: any
  ): any {
   this.addedPrd = {
      id: Number(id.value),
      name: prdName.value,
      price: Number(price.value),
      quantity: Number(quantity.value),
      catID:Number(catID.value),
      imgURL:imgURL.value
    }
    // console.log(this.addedPrd);
    // return this.prdService.addNewPrd(this.addedPrd)
    return this.prdAPIServ.addNewPrdAPI(this.addedPrd).subscribe({
      next: (data: any) => {
        console.log(data);
        // this.router.navigate(['/Products']);
      },
      error: (err: string) => {
        console.log(err);
      },
    });
  }
}
    
  
//   addNewPrdApi(): void {
//     // let prd: Iproduct = {
//     //   id:77,
//     //   name: 'ahmedFAhmy',
//     //   price: 15000,
//     //   quantity: 1,
//     //   catID: 1,
//     //   imgURL:
//     //     'https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     // };
//     this.prdAPIServ.addNewPrdAPI(this.addedPrd).subscribe({
//       next: (data: any) => {
//         console.log(data);
//         // this.router.navigate(['/Products']);
//       },
//       error: (err: string) => {
//         console.log(err);
//       },
//     });
//   }
// }