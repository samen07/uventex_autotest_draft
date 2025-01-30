import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";
import { SignUpPopup } from "./SignUpPopup";

export class SignInPopup extends BasePage {
    private signUpButton = this.page.locator(".signup-link");

    constructor(page: Page) {
        super(page);
    }

    async clickOnSignUpPopup() {
        await this.signUpButton.waitFor();
        await this.signUpButton.click();
        return new SignUpPopup(this.page);
    }

}
