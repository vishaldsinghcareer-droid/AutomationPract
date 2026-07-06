# Dummy Booking Website - End-to-End Test Plan

## Objective
Validate the core end-to-end booking journey on the Dummy Booking Website, including form entry, selection of booking options, travel and billing details, and expected validation behavior.

## Scope
This plan covers:
- Landing page availability and basic content visibility
- Booking option selection
- Passenger and travel details entry
- Delivery preference selection
- Billing information entry
- City selection behavior
- Validation and error handling for required and invalid input

## Assumptions
- The test begins from a fresh browser session.
- The website is reachable and the page loads successfully.
- The page is a demo form and does not perform a real payment or booking submission.

## Test Scenarios

### 1. Landing page loads correctly
**Purpose:** Confirm the page is accessible and the main booking form is visible.

**Steps**
1. Open the website URL.
2. Confirm the page title and main heading are displayed.
3. Verify the booking form sections are visible:
   - Passenger Details
   - Number of Additional Passengers
   - Travel Details
   - Delivery Option
   - Billing Details
   - Most Visited Cities

**Expected Results**
- The page loads without errors.
- The booking form is visible and interactive.
- All major sections appear in the expected order.

### 2. Happy path booking with one-way trip
**Purpose:** Verify the full booking flow for a standard one-way booking.

**Steps**
1. Select a booking option such as "Dummy ticket for visa application – $200".
2. Enter first name and last name.
3. Enter date of birth.
4. Select gender.
5. Choose "I’m the only one traveler" in the passenger dropdown.
6. Select "One Way".
7. Enter from and destination cities.
8. Select departure date.
9. Choose a delivery option such as Email.
10. Enter billing name, phone, email, street address, country, postcode, and prefecture.
11. Select one or more cities from the city table.
12. Submit or complete the form as supported by the page.

**Expected Results**
- All entered values are accepted.
- The booking flow completes without unexpected errors.
- The user is able to reach the end of the form successfully.

### 3. Happy path booking with round trip and additional passengers
**Purpose:** Validate multi-passenger and round-trip scenarios.

**Steps**
1. Select a booking option such as "Dummy hotel and flight booking – $500".
2. Choose a passenger count such as "Add 2 more passenger (200%)".
3. Select "Round Trip".
4. Enter departure and return dates.
5. Choose delivery option as WhatsApp or Both.
6. Enter valid billing details.
7. Select multiple cities from the table.
8. Complete the form.

**Expected Results**
- The form supports round-trip selection and additional passenger counts.
- The user can complete the flow with multiple selections.
- No broken layout or missing fields occur.

### 4. Validation for required fields
**Purpose:** Ensure the form prevents incomplete submission where required.

**Steps**
1. Leave mandatory fields blank.
2. Try to complete the form or trigger the page validation behavior.
3. Observe which fields produce validation feedback or block progression.

**Expected Results**
- Required fields are clearly identified.
- The user receives validation feedback or is prevented from proceeding until the required information is entered.

### 5. Invalid email and phone input
**Purpose:** Confirm unsupported formatting is handled correctly.

**Steps**
1. Enter an invalid email address such as "test@".
2. Enter an invalid phone number such as letters or a too-short value.
3. Attempt to complete the form.

**Expected Results**
- The application should reject or flag invalid contact values.
- The user should be informed clearly if the data is not acceptable.

### 6. Date validation and logical travel dates
**Purpose:** Verify that date-related input behaves consistently.

**Steps**
1. Enter a return date earlier than the departure date.
2. Try to proceed with the form.
3. Repeat with a valid date range.

**Expected Results**
- The page should either prevent inconsistent dates or clearly flag the issue.
- Valid date ranges should be accepted.

### 7. Delivery preference selection
**Purpose:** Check that the optional delivery preferences behave correctly.

**Steps**
1. Choose Email, WhatsApp, and Both options one at a time.
2. Confirm the selection changes in the UI as expected.
3. Complete the form with each option.

**Expected Results**
- Each delivery option can be selected independently.
- The selected option remains visible and consistent.

### 8. City selection behavior
**Purpose:** Verify that city selection from the table works correctly.

**Steps**
1. Select one city from the table.
2. Select multiple cities.
3. Deselect them and confirm the UI updates.

**Expected Results**
- Selections can be added and removed as expected.
- The table behaves consistently across one or multiple selections.

### 9. Cross-browser and responsive behavior
**Purpose:** Ensure the booking form remains usable across common browser environments and screen sizes.

**Steps**
1. Open the page in at least one Chromium-based browser and one other supported browser.
2. Resize the viewport to mobile and desktop widths.
3. Verify the form fields remain visible and usable.

**Expected Results**
- The form is readable and usable on different viewport sizes.
- No key controls are hidden or inaccessible.

## Exit Criteria
The feature is considered ready for release when:
- The happy-path booking flow works successfully.
- Required fields and invalid input are handled properly.
- The form remains usable across supported browsers and screen sizes.
