export abstract class Component {
    public isVisible(selector): boolean {
        return browser.isVisible(selector);
    }

    public isVisibleWithinViewport(selector): boolean {
        return browser.isVisibleWithinViewport(selector);
    }
}
