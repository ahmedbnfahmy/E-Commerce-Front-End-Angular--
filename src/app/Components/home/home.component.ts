import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ClassData } from 'src/app/Models/class-data';
import { FormService } from 'src/app/Services/ads.service';
import { ItiInfo } from '../../Models/iti-info';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit,OnDestroy {
  // title:string="Hello MEARN Track";

  // sayHello(){
  //   return "This from ts , "+ this.title;
  // }

  // Interface
  iti: ItiInfo = {
    trackName: 'MEARN Track',
    trackLogo: 'https://miro.medium.com/max/1400/1*k0SazfSJ-tPSBbt2WDYIyw.png',
    itiBranches: ['Smart', 'Qena', 'Sohag'],
  };

  // Day2
  // class
  classData: ClassData;
  //1- intialize values
  subScribe!:Subscription  // ! null null when you know this function will return value not null use this in intializing
  subScribeArr:Subscription[]=[]  // ! null null when you know this function will return value not null use this in intializing

// add 

ads:string=''
err:string=''
compelete:string=''

  constructor(private formS:FormService) {
    this.classData = new ClassData(
      'Hello World',
      'https://images.unsplash.com/photo-1600703136783-bdb5ea365239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      ['item1', 'item2', 'item3']
    );
  }
  addArr:string[]=[]
  ngOnInit(): void {
let observer={
  next:(data:string)=>{ //data comming from from observable 
    this.ads=data;
    
  },error:(err:string)=>{
    this.err= err;
    
  },compelete:()=>{
    this.compelete='its done'

  }
}
// this.subScribe=this.formS.getadsShow(2).subscribe(observer)
this.subScribe=this.formS.getadsShow(2).subscribe(observer)
this.subScribeArr.push(this.subScribe)
} // inject the object to this function 
  ngOnDestroy(): void {
    for (let sub of this.subScribeArr) // bestPractice for many observables to unsubscribe
    sub.unsubscribe()
  }

  showImg: boolean = true;
  toggleImg() {
    this.showImg = !this.showImg;
  }

  userFeedback: string = 'Very Good';
}
