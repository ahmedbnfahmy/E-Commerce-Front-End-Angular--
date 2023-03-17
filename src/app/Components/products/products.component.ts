import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap } from 'rxjs';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges {
// iterface => array of objects


// Day3
@Input() receivedCatID:number = 0;
@Output() totalPriceChangedEv:EventEmitter<number>;

prdList:Iproduct[];
prdListOfCat:Iproduct[]=[];
orderTotalPrice:number = 0;
cartList:Iproduct[]=[]
currDate:Date
creCard:string
cardId:string
// productList:Iproduct[]=[]
constructor(private prdService:ProductService,private router:Router, private prdAPI:ProductApiService){
  this.totalPriceChangedEv=new EventEmitter<number>();
  
  // this.addedPrdEV=new EventEmitter<any>;
  
  this.prdList=prdService.productList
  
  this.currDate=new Date()
  this.cardId = '29909011509345'
  this.creCard='1234123412341234';
}
// Day3
ngOnChanges(): void {
  // this.getProductsOfCat();
  //  this.prdListOfCat = this.prdService.getProductByCategoryID(this.receivedCatID);
// this.prdAPI.deleteNewPrdAPI(this.delPrdById).subscribe()
  if(this.receivedCatID==0){
    this.prdAPI.getAllProducts().subscribe(data=>{this.prdListOfCat=data})
  }else{

    this.prdAPI.getProductsByCategoryID(this.receivedCatID).subscribe(data=>{ this.prdListOfCat = data})
  }

    // lazy lodded means you should subscribe first 
  //  this.newPrdList = this.prdService. addNewPrd(prd:any);
  }
  ngOnInit(): void {
  }
updateTotalPrice(prdPrice:number,itemsCount:any){
  // this.orderTotalPrice=prdPrice*itemsCount;
  // convert string to number
  // this.orderTotalPrice += prdPrice * parseInt(itemsCount);
  // this.orderTotalPrice += prdPrice * Number(itemsCount);
  // this.orderTotalPrice += prdPrice * itemsCount as number;
  this.orderTotalPrice += prdPrice * +itemsCount;
  this.totalPriceChangedEv.emit(this.orderTotalPrice);

}
openDetailsOfProduct(prdID:number){
// this.router.navigate([path,parameter])
this.router.navigate(['Products',prdID]) // return promise you can handle function .then or .catch 
}

getPrdCart(prdID:any):any{
  // console.log('hello')
  let findedId = this.prdList.find(i=>i.id==prdID);
  if (findedId){
    console.log(findedId);
    // cartList.push(findedId)
    console.log(this.cartList)
    return this.cartList.push(findedId)
  }
  
}

deletePrd(prd:any){
console.log(prd);
  return this.prdAPI.deleteNewPrdAPI(prd).subscribe(resdata=>{ console.log(resdata);
  })
  }

}