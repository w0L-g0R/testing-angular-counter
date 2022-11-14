import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterComponent} from "./components/counter/counter.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'counter-component', component: CounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
