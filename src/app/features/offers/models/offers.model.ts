export interface offersList {
  offers: Offer[];
}
export interface Offer {
  id: number;
  name: string;
  contractEndDate: Date;
  contractStartDate: Date;
}
