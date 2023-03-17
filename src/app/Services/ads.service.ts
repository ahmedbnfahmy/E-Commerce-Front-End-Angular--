import { Injectable } from '@angular/core';
import { take , from, interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
adsList:string[]=[]
  constructor() {
this.adsList=[
'discount 50%','discount 25%','discount 75%','its free now ',
'','observable compelete '
]
   }
getadsShow(intervalTime:number)
{
  return new Observable <string>((observ)=>{ // here return observable methode 
  let count=0;
  let timer=setInterval(()=>{
    if(count==this.adsList.length){
      // console.log('compelete')
      
      observ.complete()
    }
    if(this.adsList[count]==''){
      // console.log('hello')
      observ.error('error msg ')
    }
    observ.next(this.adsList[count]);
    count++;
    if(count==this.adsList.length){
      count=0
    }
  },intervalTime*1000)
  
return { // when you unsubscribe 
  unsubscribe(){
    clearInterval(timer)
    console.log('stopped');
    
  }
}
  })
}



   showAds():Observable <string> {

// const numbers = interval(2000);
// const takeFourNumbers = numbers.pipe(from (this.adsList));
// takeFourNumbers.subscribe(x => console.log('Next: ', x));
  // return interval(period:number = 1000,)
  return from(this.adsList)
   }
}
