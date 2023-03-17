import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})



export class ProductDetailsComponent implements OnInit,OnDestroy {
  
  prd: Iproduct | undefined = undefined;
  parMap!:Subscription
  prdIdArr:number[]=[]
  currPrdID: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private prdService: ProductService,private router:Router,
    private location: Location
  ) {
    
  }
  
  ngOnInit(): void {
    

    this.parMap = this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currPrdID= Number(paramMap.get('pid'));
      this.prd = this.prdService.getProductByID(this.currPrdID);
      console.log('this is observable');
      

    })
    // this.currPrdID = this.activatedRoute.snapshot.paramMap.get('pid') // to catch link params value : number
    //   ? Number(this.activatedRoute.snapshot.paramMap.get('pid'))
    //   : 0;

    this.prdIdArr=this.prdService.getPrdIds();

  }

  ngOnDestroy(): void {
    this.parMap.unsubscribe
  }


goBck(){
    this.location.back();
  }
prev(){
  // we need to go to the previous id 
  let currIndex= this.prdIdArr.findIndex((elem)=>elem==this.currPrdID)
  console.log(currIndex);
  let prevPrdId;
  if(currIndex>0){
  prevPrdId=this.prdIdArr[currIndex-1]
  this.router.navigate(['./product/Prddetails', prevPrdId])
  
  }
  


}
next(){
  let currIndex= this.prdIdArr.findIndex((elem)=>elem==this.currPrdID)
  console.log(currIndex);
  let nextPrdId;
  if(currIndex<this.prdIdArr.length){
  nextPrdId=this.prdIdArr[currIndex+1]
  this.router.navigate(['./product/Prddetails', nextPrdId])
}


}
// edit()
// {
//  this.currPrdID
// }


}

