import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ArrayComponent } from './array/array.component';
import { RouterModule } from '@angular/router';
import { JackReacherComponentComponent } from './jack-reacher-component/jack-reacher-component.component';
import { ArrayDetailsComponent } from './array-details/array-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArrayComponent,
    JackReacherComponentComponent,
    ArrayDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
