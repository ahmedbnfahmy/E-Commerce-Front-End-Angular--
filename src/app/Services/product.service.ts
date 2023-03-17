import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({ // dif decorator function to work by dependancy Injection
  
  providedIn: 'root', //'any' opposite  'moduleName' 
   // works on singleton dp // only one object can be created from this class 
  // and this one object shared throw all project as one refrence object any operation all project will see it 
})
export class ProductService  {
  productList:Iproduct[];
  // addedPrd:any
  // cartList:Iproduct[]=[]
  constructor() {

    this.productList=[
      {id:1,name:"Samgsung",price:12000,quantity:1,catID:1,imgURL:"https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id:24,name:"IPhone",price:35000,quantity:0,catID:1,imgURL:"https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id:13,name:"Dell",price:31200,quantity:5,catID:2,imgURL:"https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id:55,name:"HP",price:50000,quantity:2,catID:2,imgURL:"https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id:43,name:"LG",price:60000,quantity:0,catID:3,imgURL:"https://images.pexels.com/photos/1046639/pexels-photo-1046639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id:23,name:"Tornado",price:33500,quantity:7,catID:3,imgURL:"https://images.pexels.com/photos/1046639/pexels-photo-1046639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    ];
   }


  //  function return all products
  getAllProducts():Iproduct[]{
    return this.productList;

  }

  // function return products by category id
  getProductByCategoryID(catId:number):Iproduct[]{

    if(catId == 0){
      console.log('if0condition');
      
      return this.getAllProducts();
    }
    else{
      console.log('if oter condition');
      return this.productList.filter(prd=>prd.catID==catId);
    }

  }

  // get product by id
  getProductByID(prdID:number):any{
    
    return this.productList.find(prd=>prd.id==prdID);

  }

  getPrdIds(): number[] {

    let prdIDs:number[] = this.productList.map(prd=>prd.id);
    return prdIDs
  }
  
  addNewPrd(prd:any){
    // this.newProductList=this.productList
   this.productList.push(prd)
    console.log(this.productList);
    // console.log(this.newProductList);
    
  }
}


  // this second way to get id if it had null value 
// getPrdByID2(prdID:number):Iproduct|null {
//   let foundedPrd=this.prdList.find(prd=>prd.id==prdID);
//   return foundedPrd? foundedPrd:null;}


