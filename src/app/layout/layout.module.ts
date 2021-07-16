import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { LoginLayoutComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DefaultComponent, LoginLayoutComponent],
  imports: [SharedModule],
  exports: [LoginLayoutComponent]
})
export class LayoutModule {}
