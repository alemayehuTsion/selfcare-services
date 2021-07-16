import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { offersList } from '../models/offers.model';
import { OffersEndpoint } from './offers.endpoint';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  constructor(private readonly http: HttpClient) {}

  getOffers(): Observable<offersList> {
    return this.http.get<any>(`${OffersEndpoint.offers}`);
  }
}
