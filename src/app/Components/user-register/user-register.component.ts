import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserSignIn } from 'src/app/Models/user-sign-in';
import { UserSignInService } from 'src/app/Services/userSignIn.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnChanges{
userForm:FormGroup;

aPIUser:UserSignIn={} as UserSignIn;

constructor(private formBuilder:FormBuilder ,private userSignInService:UserSignInService){

  // ----------------- first methode

  // this.userForm=new FormGroup({
  //   fullName:new FormControl('',[Validators.required,Validators.minLength(5)]),
  //   password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  //   emali:new FormControl('email',[Validators.required]),
  //   address:new FormGroup({
  //     city: new FormControl(''),
  //     postalCode: new FormControl(''),
  //     street: new FormControl(''),
  //   }),
  //   phoneNum:new FormControl('',[Validators.required]),
  // })


  // ----------------- second methode
// let phoneValid = '^[a-d0-9_-]{8,15}$'
this.userForm=this.formBuilder.group({
  fullName:['',[Validators.required,Validators.minLength(5)]],
  password:['',[Validators.required,Validators.minLength(6)]],
  id:['',[Validators.required]],
  email:['',[Validators.required]],
  address:this.formBuilder.group({
city:['',Validators.required],
postalCode:['',Validators.required],
street:['',Validators.required]
  }),
  referral:[''],
  refOther:[''],
  phoneNum:formBuilder.array([formBuilder.control('',[Validators.required,Validators.pattern('^[0-9]{8,15}$')])])
})


}
get referral(){
return this.userForm.get('referral')

}
  ngOnChanges(): void {
  
  }


// now you can access property from constructor into html 
get fullName (){
  return this.userForm.get('fullName')
}
get phoneNum (){
  return this.userForm.get('phoneNum') as FormArray;
}

addNewNum(){
  this.phoneNum.push(this.formBuilder.control(''))
}

removeNum(i:number){
  this.phoneNum.removeAt(i)
}

addTojson(userData:any){
this.aPIUser=userData
return this.userSignInService.userSignInAPI(this.aPIUser).subscribe({
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
