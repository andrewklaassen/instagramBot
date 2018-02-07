import { Page } from './page';
import { User } from '../lib/interfaces/user';
import {WebElement} from '../lib/interfaces/WebElement';

class HomePage extends Page {
    public open(): void {
        browser.url(`https://www.instagram.com`);
        browser.pause(180000);
    }
}

export default new HomePage();
