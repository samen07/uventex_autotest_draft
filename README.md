# Playwright Test Suite

This repository contains Playwright tests for the sign-up functionality.

## How to Install and Run

*   **Install Playwright:**
    ```bash
    npx playwright install
    ```
*   **Run Tests (headed mode):**
    ```bash
    npx playwright test --headed
    ```

## Test Cases

### `001_sign_up_popup_should_have_correct_layout`

This test verifies the layout of the Sign Up popup.

1.  Go to the Sign Up frame and compare its layout with the etalon.

### `002_sign_up_new_user_positive`

This test performs a positive registration flow for a new user.

1.  Go to the Sign Up frame.
2.  Fill in the form with test user data.
3.  Click "Register" and check that the Success popup appears.
