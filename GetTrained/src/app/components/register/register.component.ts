import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;
  userService: UserService;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  // Regex to check whether email is valid or not

  constructor( userService: UserService) {  // make a call to service
    this.userService = userService;
   }

  onSubmit(form: NgForm) {    // form submission
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true; // success message
        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessage = err.error.join('<br/>'); // error message
        } else {
          this.serverErrorMessage = 'Error occured while submitting the form';
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }
  ngOnInit() {
  }
}
