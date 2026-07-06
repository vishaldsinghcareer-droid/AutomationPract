import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { bookingData } from '../test-data/bookingData';
import { openAndVerifyBookingPage } from '../pages/sectionTestHelper';

test.describe('Dummy Booking Website - end to end operations', () => {
  test('loads the booking page and shows the main sections', async ({ page }) => {
    await openAndVerifyBookingPage(page);

    await expect(page.getByRole('heading', { name: 'Dummy Booking Website' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Passenger Details' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Travel Details' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Billing Details' })).toBeVisible();
  });

  test('fills the passenger details section correctly', async ({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.openBookingPage();

    await pageManager.passengerDetailsPage.fillPassengerDetails({
      firstName: bookingData.passenger.firstName,
      lastName: bookingData.passenger.lastName,
      dateOfBirth: bookingData.passenger.dateOfBirth,
      gender: bookingData.passenger.gender,
    });

    await expect(pageManager.passengerDetailsPage.firstNameInput).toHaveValue(bookingData.passenger.firstName);
    await expect(pageManager.passengerDetailsPage.dateOfBirthInput).toHaveValue(bookingData.passenger.dateOfBirth);
  });

  test('selects the additional passenger option and travel details', async ({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.openBookingPage();

    await pageManager.passengerDetailsPage.selectPassengerOption(bookingData.passenger.additionalPassengers);
    await pageManager.travelDetailsPage.fillTravelDetails({
      tripType: bookingData.travel.tripType,
      fromCity: bookingData.travel.fromCity,
      destinationCity: bookingData.travel.destinationCity,
      departureDate: bookingData.travel.departureDate,
      returnDate: bookingData.travel.returnDate,
    });

    await expect(pageManager.passengerDetailsPage.passengerDropdown).toContainText(bookingData.passenger.additionalPassengers);
    await expect(pageManager.travelDetailsPage.fromCityInput).toHaveValue(bookingData.travel.fromCity);
    await expect(pageManager.travelDetailsPage.destinationCityInput).toHaveValue(bookingData.travel.destinationCity);
  });

  test('selects delivery preferences and billing details', async ({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.openBookingPage();

    await pageManager.deliveryPage.selectDeliveryOption(bookingData.delivery.option);
    await pageManager.billingDetailsPage.fillBillingDetails({
      billingName: bookingData.billing.billingName,
      phone: bookingData.billing.phone,
      email: bookingData.billing.email,
      streetAddress: bookingData.billing.streetAddress,
      country: bookingData.billing.country,
      postcode: bookingData.billing.postcode,
      prefecture: bookingData.billing.prefecture,
      streetAddress2: bookingData.billing.streetAddress2,
    });

    await expect(pageManager.billingDetailsPage.billingNameInput).toHaveValue(bookingData.billing.billingName);
    await expect(pageManager.billingDetailsPage.emailInput).toHaveValue(bookingData.billing.email);
  });

  test('selects cities from the visited cities section', async ({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.openBookingPage();

    await pageManager.citySelectionPage.selectCities(bookingData.cities);

    await expect(page.getByRole('heading', { name: 'Most Visited Cities' })).toBeVisible();
  });

  test('completes the full end to end booking flow', async ({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.openBookingPage();

    await pageManager.passengerDetailsPage.fillPassengerDetails({
      firstName: bookingData.passenger.firstName,
      lastName: bookingData.passenger.lastName,
      dateOfBirth: bookingData.passenger.dateOfBirth,
      gender: bookingData.passenger.gender,
    });
    await pageManager.passengerDetailsPage.selectPassengerOption(bookingData.passenger.additionalPassengers);

    await pageManager.travelDetailsPage.fillTravelDetails({
      tripType: bookingData.travel.tripType,
      fromCity: bookingData.travel.fromCity,
      destinationCity: bookingData.travel.destinationCity,
      departureDate: bookingData.travel.departureDate,
      returnDate: bookingData.travel.returnDate,
    });

    await pageManager.deliveryPage.selectDeliveryOption(bookingData.delivery.option);

    await pageManager.billingDetailsPage.fillBillingDetails({
      billingName: bookingData.billing.billingName,
      phone: bookingData.billing.phone,
      email: bookingData.billing.email,
      streetAddress: bookingData.billing.streetAddress,
      country: bookingData.billing.country,
      postcode: bookingData.billing.postcode,
      prefecture: bookingData.billing.prefecture,
      streetAddress2: bookingData.billing.streetAddress2,
    });

    await pageManager.citySelectionPage.selectCities(bookingData.cities);

    await expect(pageManager.homePage.heading).toBeVisible();
  });
});
