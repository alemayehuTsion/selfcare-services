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

  colors = ['#29AFCF','#BEC3C7', '#995DFF', '#F175B1' ];
  offerDetails : OfferDetail[] = [];
  showDetail: boolean[] = [];
  loading:boolean = false;
  detailLoading : boolean = false;
  constructor(private service: OffersService) {};

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(): void {
    this.loading = true;
    this.service.getOffers().subscribe((result) => {
      this.offers = result.offers;
      this.loading = false;
    });
  }
  trackByFn(index: any, item: { id: any }): any {
    if (item && item.id) {
      return item.id;
    }
    return index;
  }

  detail(offer:Offer){
    this.detailLoading = true;
    this.showDetail[offer.id] = true;
    this.service.getOfferDetails(offer.id).subscribe((result)=>{
        this.offerDetails = result.subscriptions;
        this.detailLoading = false;
    })
  }

  back(offer:Offer){
    this.showDetail[offer.id] = false;
    this.offerDetails =[];
  }
}
