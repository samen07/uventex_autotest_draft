import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/MainPage";
import { BASE_URL } from "../utils/constants";

test.describe("Sign Up Tests", () => {

    test("001_sign_up_popup_should_have_correct_layout", async ({ page }) => {
        const mainPage = new MainPage(page)
            .open(BASE_URL);
        const signInPopup = await new MainPage(page).clickOnSignInPopup();
        const signUpPopup = await signInPopup.clickOnSignUpPopup();

        await signUpPopup.comparePageScreenshot("signUpPopup");
    });



    test("002_sign_up_new_user_positive", async ({ page }) => {
        const mainPage = new MainPage(page).open(BASE_URL);

        const signInPopup = await new MainPage(page).clickOnSignInPopup();
        const signUpPopup = await signInPopup.clickOnSignUpPopup();

        await signUpPopup.inputFirstName("testname");
        await signUpPopup.inputLastName("lastname");
        await signUpPopup.inputEmail("test@test.com");
        await signUpPopup.inputPassword("qwerty123");
        await signUpPopup.checkIAgreePrivacyPolicy();
        await signUpPopup.checkIAgreeTermsConditions();

        await signUpPopup.clickSignUpButton();

        await expect(signUpPopup.successPopup).toBeVisible();

        await signUpPopup.comparePageScreenshot("signUpSuccess");
    });
});
