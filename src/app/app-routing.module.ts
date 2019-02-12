import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VolumeDetailComponent } from './volume-detail/volume-detail.component';
import { CartComponent } from './cart/cart.component';



const appRoutes: Routes = [
 
  { path: 'volume-detail/:id', component: VolumeDetailComponent },
  { path: 'cart', component: CartComponent },

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}