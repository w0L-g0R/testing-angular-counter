import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home/home.component";
import {CounterComponent} from "./components/counter/counter/counter.component";
import {NgRxCounterComponent} from "./components/ngrx-counter/ngrx-counter.component";
import { ServiceCounterComponent } from './components/service-counter/service-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    NgRxCounterComponent,
    ServiceCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
