import { Element, Client, RawResult } from 'webdriverio';

export interface WebElement extends Client<RawResult<Element>>, RawResult<Element> {}
