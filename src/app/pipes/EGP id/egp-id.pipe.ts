import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egpId'
})
export class EgpIdPipe implements PipeTransform {

  transform(value:string): string {

    let creCardNum:string ='';
    if(value && value.length==14){
      const firstFournum=value.substring(1,7) 
      // const secFournum=value.substring(6,14) 
      const yDate=firstFournum.substring (0,2)
      const mDate=firstFournum.substring (2,4)
      const dDate=firstFournum.substring (4,6)
      creCardNum=`your birth date is  19${yDate} - ${mDate} - ${dDate}` 
      
    }
    return creCardNum
  }
 
  }


