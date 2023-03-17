import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-admin-add-newprd',
  templateUrl: './admin-add-newprd.component.html',
  styleUrls: ['./admin-add-newprd.component.scss'],
})
export class AdminAddNewprdComponent implements OnInit, OnChanges {
  catApiList: Icategory[] = [];
  aPINewPrd: Iproduct = {} as Iproduct;
  constructor(
    private prdAPIService: ProductApiService,
    private router: Router
  ) {}

  ngOnChanges(): void { 
  }
  ngOnInit(): void {
    
    this.prdAPIService.getCatList().subscribe((data) => {
      this.catApiList = data;
      
    });
  }

  addPrd(
    id: any,
    prdName: any,
    price: any,
    quantity: any,
    catID: any,
    imgURL: any
  ): any {
    // if(catID=='')
    console.log(catID);
    this.aPINewPrd = {
      id: Number(id.value),
      name: prdName.value,
      price: Number(price.value),
      quantity: Number(quantity.value),
      catID: Number(catID.value),
      imgURL: imgURL.value,
    };


    // return this.prdAPIService.updatePrdAPI(id,this.aPINewPrd).subscribe({
    //   next: (data: any) => {
    //     console.log(data);
    //     // this.router.navigate(['/Products']);
    //   },
    //   error: (err: string) => {
    //     console.log(err);
    //   },
    // });
    // return this.prdService.addNewPrd(this.addedPrd)
    // return this.prdAPIService.addNewPrdAPI(this.aPINewPrd).subscribe({
    //   next: (data: any) => {
    //     console.log(data);
    //     // this.router.navigate(['/Products']);
    //   },
    //   error: (err: string) => {
    //     console.log(err);
    //   },
    // });
  }





}
