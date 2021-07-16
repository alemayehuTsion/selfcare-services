import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../apis/offers.service';
import { Offer } from '../../models/offers.model';
import { OfferDetail } from '../../models/offersdetail.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {
  offers: Offer[] = [];

  colors = ['#BEC3C7', '#995DFF', '#F175B1', '#29AFCF'];
  offerDetails : OfferDetail[] = [];
  showDetail: boolean[] = [];
  constructor(private service: OffersService) {};

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(): void {
    this.service.getOffers().subscribe((result) => {
      this.offers = result.offers;
    });
  }
  trackByFn(index: any, item: { id: any }): any {
    if (item && item.id) {
      return item.id;
    }
    return index;
  }

  detail(offer:Offer){
    this.showDetail[offer.id] = true;
    this.service.getOfferDetails(offer.id).subscribe((result)=>{
        this.offerDetails = result.subscriptions;
    })
  }

  back(offer:Offer){
    this.showDetail[offer.id] = false;
  }
}
