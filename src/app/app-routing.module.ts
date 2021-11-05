import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { WeddingComponent } from './wedding/wedding.component';


const routes: Routes = [
  { path: 'wedding', component:  WeddingComponent},
  { path: 'home', component:  LayoutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
