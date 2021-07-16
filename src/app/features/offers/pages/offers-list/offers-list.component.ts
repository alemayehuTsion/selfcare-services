import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../apis/offers.service';
import { Offer } from '../../models/offers.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {
  offers : Offer[] = [];

  constructor(private service: OffersService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(): void {
    this.service.getOffers().subscribe(result => {
        this.offers = result.offers;
    })
  }
}
