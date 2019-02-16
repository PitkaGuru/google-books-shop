import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from './shared/custom-material.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './services/data.service';
import { MessageService } from './services/message.service';
import { VolumeDetailComponent } from './volume-detail/volume-detail.component';
import { CartComponent } from './cart/cart.component';
import { InfoDialogComponent } from './shared/dialogs/info-dialog/info-dialog.component';
import { UtilService } from './services/util.service';
import { SureDialogComponent } from './shared/dialogs/sure-dialog/sure-dialog.component';
import { SureBuyDialogComponent } from './shared/dialogs/sure-buy-dialog/sure-buy-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VolumeDetailComponent,
    CartComponent,
    InfoDialogComponent,
    SureDialogComponent,
    SureBuyDialogComponent
  ],
  entryComponents: [
    InfoDialogComponent,
    SureDialogComponent,
    SureBuyDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [
    DataService,
    MessageService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
