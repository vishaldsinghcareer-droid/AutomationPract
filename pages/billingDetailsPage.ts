import { Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class BillingDetailsPage extends BasePage {
  readonly billingNameInput: Locator;
  readonly phoneInput: Locator;
  readonly emailInput: Locator;
  readonly streetAddressInput: Locator;
  readonly countryDropdown: Locator;
  readonly postcodeInput: Locator;
  readonly prefectureInput: Locator;
  readonly streetAddress2Input: Locator;

  constructor(page: Parameters<typeof BasePage>[0]) {
    super(page);
    this.billingNameInput = this.page.locator('#billing_name');
    this.phoneInput = this.page.locator('#billing_phone');
    this.emailInput = this.page.locator('#billing_email');
    this.streetAddressInput = this.page.locator('#billing_address');
    this.countryDropdown = this.page.locator('#billing_country');
    this.postcodeInput = this.page.locator('#postcode');
    this.prefectureInput = this.page.locator('#Prefecture');
    this.streetAddress2Input = this.page.locator('#street_address2');
  }

  async fillBillingDetails(data: { billingName: string; phone: string; email: string; streetAddress: string; country: string; postcode: string; prefecture: string; streetAddress2: string }) {
    await this.billingNameInput.fill(data.billingName);
    await this.phoneInput.fill(data.phone);
    await this.emailInput.fill(data.email);
    await this.streetAddressInput.fill(data.streetAddress);
    await this.countryDropdown.selectOption({ label: data.country });
    await this.postcodeInput.fill(data.postcode);
    await this.prefectureInput.fill(data.prefecture);
    await this.streetAddress2Input.fill(data.streetAddress2);
  }
}
