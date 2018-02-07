import { User } from './interfaces/user';

/**
 * Firefox will often prompt a dialog and ask for proxy
 * This is different from CAS
 */
export function handleFirefoxProxy(user: User): void {
    if (browser.desiredCapabilities.browserName === 'firefox') {
        const baseUrl: string = browser && browser.options && browser.options.baseUrl || '';
        if (!baseUrl) { throw new Error('Base url is empty'); }
        browser.options.baseUrl = `https://${user.username}:${user.password}@${baseUrl.slice(8)}`;
    }
}
