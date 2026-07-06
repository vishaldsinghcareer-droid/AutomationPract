import { Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class TravelDetailsPage extends BasePage {
  readonly oneWayRadio: Locator;
  readonly roundTripRadio: Locator;
  readonly fromCityInput: Locator;
  readonly destinationCityInput: Locator;
  readonly departureDateInput: Locator;
  readonly returnDateInput: Locator;

  constructor(page: Parameters<typeof BasePage>[0]) {
    super(page);
    this.oneWayRadio = this.page.locator('#oneway');
    this.roundTripRadio = this.page.locator('#roundtrip');
    this.fromCityInput = this.page.locator('#fromcity');
    this.destinationCityInput = this.page.locator('#destcity');
    this.departureDateInput = this.page.locator('#departdate');
    this.returnDateInput = this.page.locator('#returndate');
  }

  async fillTravelDetails(data: { tripType: string; fromCity: string; destinationCity: string; departureDate: string; returnDate: string }) {
    if (data.tripType.toLowerCase() === 'roundtrip') {
      await this.roundTripRadio.check();
    } else {
      await this.oneWayRadio.check();
    }

    await this.fromCityInput.fill(data.fromCity);
    await this.destinationCityInput.fill(data.destinationCity);
    await this.departureDateInput.fill(data.departureDate);
    await this.returnDateInput.fill(data.returnDate);
  }
}
