import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/about/about.comonent';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  {path: 'product-list', component: ProductListComponent},
  {path: 'about', component: AboutComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
