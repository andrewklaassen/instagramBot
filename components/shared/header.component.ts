import { Component } from '../component';
import { WebElement } from '../../lib/interfaces/webElement';

export class HeaderComponent extends Component {
    public get selector(): WebElement { return $('app-header'); }
    public get appName(): WebElement { return $('app-header header h1 span'); }
    public get searchTypeDropDown(): WebElement { return $('app-quick-track div.ui-dropdown-trigger'); }
    public get trackingTextBox(): WebElement { return $('input[name="trackingquery"]'); }
    public get trackButton(): WebElement { return $('app-quick-track form button'); }

    public track(type: string, value: string): void {
        if (!type || !value) { return; }

        this.searchTypeDropDown.click();
        const selector: string = `//app-quick-track//div[contains(@class, 'ui-dropdown-panel')]//li[descendant::span[text()='${type}']]`;
        $(selector).waitForVisible();
        $(selector).click();

        this.trackingTextBox.setValue(value);
        this.trackButton.click();
    }
}
