import { NavComponent } from '../components/shared/nav.component';
import { HeaderComponent } from '../components/shared/header.component';
import { loginCAS } from '../lib/loginCAS';
import { handleFirefoxProxy } from '../lib/proxy';
import { User } from '../lib/interfaces/user';

let user: User = require('config').get('DefaultUser') as User;

export abstract class Page {
    public get url(): string { return user.url; }

    public maximize(): void {
        browser.windowHandleMaximize();
    }

    public getBaseUrl(): string {
        return user.url;
    }
    public getFullUrl(): string {
        return browser.getUrl();
    }

    public getTitle(): string {
        return browser.getTitle();
    }

    public quit(): void {
        browser.close();
    }
}
