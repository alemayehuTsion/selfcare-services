import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

export const modules = [CommonModule, BrowserModule, RouterModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports: [...modules]
})
export class CoreModule {}
