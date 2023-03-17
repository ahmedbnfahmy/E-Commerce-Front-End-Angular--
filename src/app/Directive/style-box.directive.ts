import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[StyleBox]'
})
export class StyleBoxDirective {

  constructor( private elemRef:ElementRef) {

    this.elemRef.nativeElement.style.border= '2px solid red'
  }
  
  //onmouseOver 
  @HostListener('mouseover') onMouseOver(){
    
    // this.elemRef.nativeElement.style.border= '4px solid green'
    this.elemRef.nativeElement.style.boxShadow= '4px 4px'
    
    
  }
  @HostListener('mouseout') onMouseOvut(){
    
    this.elemRef.nativeElement.style.border= '4px solid grey'
    this.elemRef.nativeElement.style.boxShadow= 'none'

}



}
