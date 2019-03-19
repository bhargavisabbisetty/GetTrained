import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {
  token: String;
  userService: UserService;
  successMessage: String;
  errorMessage: String;

  constructor(private route: ActivatedRoute, userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() { // a token is generated and mapped
    this.token = this.route.snapshot.paramMap.get('token');
    this.userService.activate(this.token).subscribe(( data: any ) => { // check activation
      if ( data.success ) {
        this.successMessage = data.message;
      } else {
        this.errorMessage = data.message;
      }
    });
  }

}
