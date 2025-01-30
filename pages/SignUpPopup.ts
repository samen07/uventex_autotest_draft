import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";

export class SignUpPopup extends BasePage {
    private firstNameInput = this.page.locator('input[ng-reflect-placeholder="First name"]');
    private lastNameInput = this.page.locator('input[ng-reflect-placeholder="Last name"]');
    private emailInput = this.page.locator('input[ng-reflect-placeholder="Email"]');
    private passwordInput = this.page.locator('input[ng-reflect-placeholder="Password"]');
    private privacyPolicyCheckbox = this.page.locator('#mat-mdc-checkbox-1-input');
    private termsCheckbox = this.page.locator('#mat-mdc-checkbox-2-input');
    private signUpButton = this.page.locator('button[type="submit"]');
    public successPopup = this.page.locator('.success-title');

    constructor(page: Page) {
        super(page);
    }

    async inputFirstName(name: string) {
        await this.firstNameInput.fill(name);
        return this; // Повертаємо `this` для чейнінгу
    }

    async inputLastName(name: string) {
        await this.lastNameInput.fill(name);
        return this;
    }

    async inputEmail(email: string) {
        await this.emailInput.fill(email);
        return this;
    }

    async inputPassword(password: string) {
        await this.passwordInput.fill(password);
        return this;
    }

    async checkIAgreePrivacyPolicy() {
        await this.privacyPolicyCheckbox.check();
        return this;
    }

    async checkIAgreeTermsConditions() {
        await this.termsCheckbox.check();
        return this;
    }

    async clickSignUpButton() {
        await this.signUpButton.click();
        return this;
    }
}
