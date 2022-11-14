import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {CounterComponent} from "./components/counter/counter.component";
import {NgRxCounterComponent} from "./components/ngrx-counter/ngrx-counter.component";
import { ServiceCounterComponent } from './components/service-counter/service-counter.component';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./reducers";
import {EffectsModule} from "@ngrx/effects";
import {CounterEffects} from "./effects/counter.effects";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

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
    HttpClientModule,

    AppRoutingModule,

    // NgRx Store
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),

    // NgRx Effects
    EffectsModule.forRoot([CounterEffects]),

    // NgRx Store Dev Tools
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last n states
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
