import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatTooltipModule,
  
} from "@angular/material";


@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatChipsModule,
    MatBadgeModule
  ],
})
export class CustomMaterialModule { }