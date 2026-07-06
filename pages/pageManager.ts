import { Page } from '@playwright/test';
import { HomePage } from './homePage';
import { PassengerDetailsPage } from './passengerDetailsPage';
import { TravelDetailsPage } from './travelDetailsPage';
import { DeliveryPage } from './deliveryPage';
import { BillingDetailsPage } from './billingDetailsPage';
import { CitySelectionPage } from './citySelectionPage';

export class PageManager {
  readonly homePage: HomePage;
  readonly passengerDetailsPage: PassengerDetailsPage;
  readonly travelDetailsPage: TravelDetailsPage;
  readonly deliveryPage: DeliveryPage;
  readonly billingDetailsPage: BillingDetailsPage;
  readonly citySelectionPage: CitySelectionPage;

  constructor(private readonly page: Page) {
    this.homePage = new HomePage(page);
    this.passengerDetailsPage = new PassengerDetailsPage(page);
    this.travelDetailsPage = new TravelDetailsPage(page);
    this.deliveryPage = new DeliveryPage(page);
    this.billingDetailsPage = new BillingDetailsPage(page);
    this.citySelectionPage = new CitySelectionPage(page);
  }

  async openBookingPage(url = 'https://sqatools.in/dummy-booking-website/') {
    await this.page.goto(url);
    await this.homePage.waitForLoad();
  }
}
