import { Page, expect  } from "@playwright/test";

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async takeScreenshot(name: string) {
        await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
    }

    async comparePageScreenshot(snapshotName: string): Promise<void> {
        const frameLocator = this.page.locator('.main-container');
        await this.page.waitForLoadState('networkidle');

        const screenshot = await frameLocator.screenshot();
        expect(screenshot).toMatchSnapshot(snapshotName);
    }
}
