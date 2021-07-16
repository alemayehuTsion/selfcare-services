import { NgModule } from '@angular/core';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersListComponent } from './pages/offers-list/offers-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OffersListComponent],
  imports: [SharedModule, OffersRoutingModule]
})
export class OffersModule {}
