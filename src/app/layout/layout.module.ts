import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    DefaultComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
