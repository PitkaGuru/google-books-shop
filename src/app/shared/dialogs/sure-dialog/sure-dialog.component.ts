import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-sure-dialog',
  templateUrl: './sure-dialog.component.html',
  styleUrls: ['./sure-dialog.component.scss']
})
export class SureDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SureDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  yes(){
    this.dialogRef.close(true);
  }

  no() {
    this.dialogRef.close(false);
  }

}
