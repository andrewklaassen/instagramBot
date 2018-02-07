import { Component } from '../component';
import { WebElement } from '../../lib/interfaces/webElement';

export class NavComponent extends Component {
    public get sideNavSelector(): string { return 'app-sidebar-left'; }
    public get sideNav(): WebElement { return $(this.sideNavSelector); }
    public get navToggle(): WebElement { return $('app-sidebar-left span.sidebar-pin'); }

    public toggle(): void {
        this.navToggle.click();
    }

    public navTo(item: string, subItem?: string): void {
        if (!item) { return; }

        const selector: string = `//app-sidebar-left//section/ul/li[descendant::a/span[text()='${item}']]`;
        $(selector).waitForVisible();
        $(selector).click();

        if (subItem) {
            const subSelector: string = `//app-sidebar-left//section/ul/li[descendant::a/span[text()='${item}']]/ul/li[descendant::a/span[text()='${subItem}']]`;
            $(subSelector).waitForVisible();
            $(subSelector).click();
        }
    }
}
