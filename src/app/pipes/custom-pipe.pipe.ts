import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creCardPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value:string): string {
    
    let creCardNum:string ='';
    if(value && value.length==16){
      const firstFournum=value.substring(0,4) 
      const secFournum=value.substring(4,8) 
      const thirdFournum=value.substring(8,12) 
      const fourthFournum=value.substring(12,16)
      creCardNum=`${firstFournum} - ${secFournum} -${thirdFournum} -${fourthFournum} ` 
      
    }
    return creCardNum
  }

}
