import { Page } from '@playwright/test';

export async function openAndVerifyBookingPage(page: Page) {
  await page.goto('https://sqatools.in/dummy-booking-website/');
  await page.getByRole('heading', { name: 'Dummy Booking Website' }).waitFor({ state: 'visible' });
}
