import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";
import { SignInPopup } from "./SignInPopup";

export class MainPage extends BasePage {
    private acceptCookiesButton  = this.page.locator('.t-acceptAllButton');
    private signInButton = this.page.locator('.signin-button.ng-star-inserted');

    constructor(page: Page) {
        super(page);
    }

    async open(url : string) {
        await this.page.goto(url);
        await this.acceptCookiesIfVisible();
        return this;
    }

    async acceptCookiesIfVisible() {
        if (await this.acceptCookiesButton.isVisible()) {
            await this.acceptCookiesButton.click();
        }
    }

    async clickOnSignInPopup() {
        await this.signInButton.waitFor();
        await this.signInButton.click();
        return new SignInPopup(this.page);
    }
}
