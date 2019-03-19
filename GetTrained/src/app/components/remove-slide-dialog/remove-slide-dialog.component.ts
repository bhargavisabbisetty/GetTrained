import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  message: String;
}
@Component({
  selector: 'app-remove-slide-dialog',
  templateUrl: './remove-slide-dialog.component.html',
  styleUrls: ['./remove-slide-dialog.component.scss']
})
export class RemoveSlideDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveSlideDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
   }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close(); // remove a dialog component
  }

}
