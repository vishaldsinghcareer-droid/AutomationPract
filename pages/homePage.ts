import { Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  readonly heading: Locator;

  constructor(page: Parameters<typeof BasePage>[0]) {
    super(page);
    this.heading = this.page.getByRole('heading', { name: 'Dummy Booking Website' }).first();
  }

  async waitForLoad() {
    await this.heading.waitFor({ state: 'visible' });
  }
}
