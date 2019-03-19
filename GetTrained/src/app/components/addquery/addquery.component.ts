import { QueryService } from './../../services/query.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addquery',
  templateUrl: './addquery.component.html',
  styleUrls: ['./addquery.component.scss'],
  providers: [QueryService]
})

export class AddqueryComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;
  queryService: QueryService;
  req: any;
  constructor( queryService: QueryService) {
    this.queryService = queryService;  // initiating query service
   }

// Function to submit feedback form
   onSubmit(form: NgForm) {
    this.req = {'value': form.value, 'user_id': localStorage.getItem('id')};  // bundling values from local storage and form
    this.queryService.postQuery(this.req).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000); // success message
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessage = err.error.join('<br/>');
        } else {
          this.serverErrorMessage = 'Error occured while submitting the form'; // error message
        }
      }
    );
  }

  resetForm(form: NgForm) {   // resetting the form values to empty after submission
    this.queryService.selectedQuery = {
     query_title: '',
     query_content: '',
     query_type: '',
     query_createdby: ''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }

  ngOnInit() {
  }

}



