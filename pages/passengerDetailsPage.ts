import { Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class PassengerDetailsPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly dateOfBirthInput: Locator;
  readonly passengerDropdown: Locator;
  readonly maleRadio: Locator;
  readonly femaleRadio: Locator;

  constructor(page: Parameters<typeof BasePage>[0]) {
    super(page);
    this.firstNameInput = this.page.locator('#firstname').first();
    this.dateOfBirthInput = this.page.locator('#birthday');
    this.passengerDropdown = this.page.locator('#admorepass');
    this.maleRadio = this.page.locator('#male');
    this.femaleRadio = this.page.locator('#female');
  }

  async fillPassengerDetails(data: { firstName: string; lastName?: string; dateOfBirth: string; gender: string }) {
    await this.firstNameInput.fill(data.firstName);
    if (data.lastName) {
      const lastNameField = this.page.locator('input[name="lastname"]');
      if (await lastNameField.count()) {
        await lastNameField.first().fill(data.lastName);
      }
    }
    await this.dateOfBirthInput.fill(data.dateOfBirth);
    if (data.gender.toLowerCase() === 'female') {
      await this.femaleRadio.check();
    } else {
      await this.maleRadio.check();
    }
  }

  async selectPassengerOption(option: string) {
    await this.passengerDropdown.selectOption({ label: option });
  }
}
