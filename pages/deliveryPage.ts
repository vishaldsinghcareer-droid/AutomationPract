import { Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class DeliveryPage extends BasePage {
  readonly emailRadio: Locator;
  readonly whatsappRadio: Locator;

  constructor(page: Parameters<typeof BasePage>[0]) {
    super(page);
    this.emailRadio = this.page.locator('#eamil');
    this.whatsappRadio = this.page.locator('#whatsapp');
  }

  async selectDeliveryOption(option: string) {
    const normalized = option.toLowerCase();
    if (normalized === 'whatsapp') {
      await this.whatsappRadio.check();
    } else if (normalized === 'both') {
      await this.emailRadio.check();
      await this.whatsappRadio.check();
    } else {
      await this.emailRadio.check();
    }
  }
}
