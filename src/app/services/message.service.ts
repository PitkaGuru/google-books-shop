import { Injectable } from "@angular/core";
import { MatSnackBar, MatDialog } from "@angular/material";
import { SureDialogComponent } from "../shared/dialogs/sure-dialog/sure-dialog.component";
import { InfoDialogComponent } from "../shared/dialogs/info-dialog/info-dialog.component";
import { SureBuyDialogComponent } from "../shared/dialogs/sure-buy-dialog/sure-buy-dialog.component";


@Injectable()
export class MessageService {

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) { }

  openSnackBar(message: string, action: string = 'Oké') {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  openTorlesDialog() {
    let dialogRef = this.dialog.open(SureDialogComponent, {
      data: {
        title: 'Törlés',
        content: 'Biztosan törölni szeretné?',
      }
    });

    return dialogRef.afterClosed();
  }

  openSureBuyDialog() {
    let dialogRef = this.dialog.open(SureBuyDialogComponent, {
     
    });

    return dialogRef.afterClosed();
  }

  openInfoDialog(title, content) {
    let dialogRef = this.dialog.open(InfoDialogComponent, {
      width: '600px',
      data: {
        title: title,
        content: content,
      }
    });

    return dialogRef.afterClosed();
  }
  

}