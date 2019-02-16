import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-sure-buy-dialog',
  templateUrl: './sure-buy-dialog.component.html',
  styleUrls: ['./sure-buy-dialog.component.scss']
})
export class SureBuyDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SureBuyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  yes(){
    this.dialogRef.close(true);
  }

  no() {
    this.dialogRef.close(false);
  }

}
