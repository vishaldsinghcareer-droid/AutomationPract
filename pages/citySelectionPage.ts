import { Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class CitySelectionPage extends BasePage {
  readonly cityRows: Locator;

  constructor(page: Parameters<typeof BasePage>[0]) {
    super(page);
    this.cityRows = this.page.locator('table tr').filter({ has: this.page.locator('input[type="checkbox"]') });
  }

  async selectCities(cities: string[]) {
    for (const cityName of cities) {
      const row = this.cityRows.filter({ hasText: cityName }).first();
      await row.locator('input[type="checkbox"]').check();
    }
  }
}
