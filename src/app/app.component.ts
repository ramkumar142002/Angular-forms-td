import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm : NgForm;

  user = {
    username: '',
    email: '',
    secretQuesion:'',
    answer:'',
    gender:''
  }

  submitted = false;
  answer:'';
  genders = ['male','female'];
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username : suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender: 'male'
    // })
    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    });
  }

  //without using viewchild
  // onSubmit(form: NgForm){
  //   console.log(form)
  //   console.log("Submitted!");
  // }

  onSubmit(){
    // console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuesion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset()
  }
}
