/// <reference path="../../built/index.d.ts" />
import {Browser, ElementArrayFinder, ElementFinder, ElementHelper, ProtractorExpectedConditions, ProtractorBy} from 'protractor';
let browser: Browser;
let by: ProtractorBy;
let By: ProtractorBy;
let element: ElementHelper;
let $: (search: string) => ElementFinder;
let $$: (search: string) => ElementArrayFinder;
let ExpectedConditions: ProtractorExpectedConditions;
element.all(by.css('')).clone();
element.all(by.css('')).then(() => {}, () => {});  // this is not appearing on the website
element.all(by.css('')).filter(() => {});
element.all(by.css('')).get(0);
element.all(by.css('')).first();
element.all(by.css('')).last();
element.all(by.css('')).count();
element.all(by.css('')).locator();
element.all(by.css('')).each((element: any, index: number) => {});
element.all(by.css('')).map(() => {});
element.all(by.css('')).reduce(() => {}, '');
element.all(by.css('')).evaluate('expression');
element.all(by.css('')).allowAnimations(false);
element.all(by.css('')).$$('');
element.all(by.css('')).getDriver();
element.all(by.css('')).getId();
element.all(by.css('')).getRawId();
element.all(by.css('')).serialize();
element.all(by.css('')).findElement(by.css(''));
element.all(by.css('')).click();
element.all(by.css('')).getTagName();
element.all(by.css('')).getCssValue('cssStyleProperty');
element.all(by.css('')).getAttribute('attributeName');
element.all(by.css('')).getText();
element.all(by.css('')).getSize();
element.all(by.css('')).getLocation();
element.all(by.css('')).isEnabled();
element.all(by.css('')).isSelected();
element.all(by.css('')).submit();
element.all(by.css('')).clear();
element.all(by.css('')).isDisplayed();
element.all(by.css('')).takeScreenshot();
element.all(by.css('')).takeScreenshot(true);
element.all(by.css('')).getOuterHtml();
element.all(by.css('')).getInnerHtml();
$$('').clone();
$$('').then(() => {}, () => {});
$$('').filter(() => {});
$$('').get(0);
$$('').first();
$$('').last();
$$('').count();
$$('').locator();
$$('').each((element: any, index: number) => {});
$$('').map(() => {});
$$('').reduce(() => {}, '');
$$('').evaluate('');
$$('').allowAnimations(false);
$$('').$$('');
$$('').getDriver();
$$('').getId();
$$('').getRawId();
$$('').serialize();
$$('').findElement(by.css(''));
$$('').click();
$$('').getTagName();
$$('').getCssValue('cssStyleProperty');
$$('').getAttribute('attributeName');
$$('').getText();
$$('').getSize();
$$('').getLocation();
$$('').isEnabled();
$$('').isSelected();
$$('').submit();
$$('').clear();
$$('').isDisplayed();
$$('').takeScreenshot();
$$('').takeScreenshot(true);
$$('').getOuterHtml();
$$('').getInnerHtml();
element(by.css('')).then(() => {}, () => {});
element(by.css('')).clone();
element(by.css('')).locator();
element(by.css('')).getWebElement();
element(by.css('')).element(by.css(''));
element(by.css('')).$('');
element(by.css('')).$$('');
element(by.css('')).isPresent();
element(by.css('')).isElementPresent(by.css(''));
element(by.css('')).evaluate('expression');
element(by.css('')).allowAnimations(false);
element(by.css('')).getDriver();
element(by.css('')).getId();
element(by.css('')).getRawId();
element(by.css('')).serialize();
element(by.css('')).findElement(by.css(''));
element(by.css('')).click();
element(by.css('')).getTagName();
element(by.css('')).getCssValue('cssStyleProperty');
element(by.css('')).getAttribute('attributeName');
element(by.css('')).getText();
element(by.css('')).getSize();
element(by.css('')).getLocation();
element(by.css('')).isEnabled();
element(by.css('')).isSelected();
element(by.css('')).submit();
element(by.css('')).clear();
element(by.css('')).isDisplayed();
element(by.css('')).takeScreenshot();
element(by.css('')).takeScreenshot(true);
element(by.css('')).getOuterHtml();
element(by.css('')).getInnerHtml();
$('').then(() => {}, () => {});
$('').clone();
$('').locator();
$('').getWebElement();
$('').element(by.css(''));
$('').$('');
$('').$$('');
$('').isPresent();
$('').isElementPresent(by.css(''));
$('').evaluate('expression');
$('').allowAnimations(false);
$('').getDriver();
$('').getId();
$('').getRawId();
$('').serialize();
$('').findElement(by.css(''));
$('').click();
$('').getTagName();
$('').getCssValue('cssStyleProperty');
$('').getAttribute('attributeName');
$('').getText();
$('').getSize();
$('').getLocation();
$('').isEnabled();
$('').isSelected();
$('').submit();
$('').clear();
$('').isDisplayed();
$('').takeScreenshot();
$('').takeScreenshot(true);
$('').getOuterHtml();
$('').getInnerHtml();
browser.getProcessedConfig();
browser.forkNewDriverInstance();
browser.forkNewDriverInstance(false);
browser.forkNewDriverInstance(false,false);
browser.restart();
browser.useAllAngular2AppRoots();
browser.waitForAngular();
browser.waitForAngular('');
browser.findElement('');
browser.findElements('');
browser.isElementPresent('');
browser.addMockModule('', '');
browser.addMockModule('', '', ['','']);
browser.addMockModule('', () => {});
browser.addMockModule('', () => {}, ['','']);
browser.clearMockModules();
browser.removeMockModule('');
browser.getRegisteredMockModules();
browser.get('url');
browser.refresh();
browser.refresh(100);
browser.navigate();
browser.setLocation('url');
browser.getLocationAbsUrl();
browser.debugger();
browser.enterRepl();
browser.enterRepl(100);
browser.pause();
browser.pause(100);
browser.actions();
browser.wait('condition');
browser.wait('condition', 100);
browser.wait('condition', 100, 'message');
browser.getCurrentUrl();
browser.getTitle();
browser.takeScreenshot();
by.addLocator('name', () => {});
by.addLocator('name', 'script');
by.binding('bindingDescriptor');
by.exactBinding('bindingDescriptor');
by.model('model');
by.buttonText('searchText');
by.partialButtonText('searchText');
by.repeater('repeatDescriptor');
by.exactRepeater('repeatDescriptor');
by.cssContainingText('cssSelector', 'searchText');
by.options('optionsDescriptor');
by.deepCss('selector');
by.className('className');
by.css('css');
by.id('id');
by.linkText('linkText');
by.js('js');
by.name('name');
by.partialLinkText('partialText');
by.tagName('tagName');
by.xpath('xpath');
By.addLocator('name', () => {});
By.addLocator('name', 'script');
By.binding('bindingDescriptor');
By.exactBinding('bindingDescriptor');
By.model('model');
By.buttonText('searchText');
By.partialButtonText('searchText');
By.repeater('repeatDescriptor');
By.exactRepeater('repeatDescriptor');
By.cssContainingText('cssSelector', 'searchText');
By.options('optionsDescriptor');
By.deepCss('selector');
By.className('className');
By.css('css');
By.id('id');
By.linkText('linkText');
By.js('js');
By.name('name');
By.partialLinkText('partialText');
By.tagName('tagName');
By.xpath('xpath');
ExpectedConditions.not(() => {});
ExpectedConditions.and(() => {});
ExpectedConditions.and(() => {},() => {});
ExpectedConditions.or(() => {});
ExpectedConditions.or(() => {},() => {});
ExpectedConditions.alertIsPresent();
ExpectedConditions.elementToBeClickable(element(by.css('')));
ExpectedConditions.textToBePresentInElement(element(by.css('')), 'text');
ExpectedConditions.textToBePresentInElementValue(element(by.css('')), 'text');
ExpectedConditions.titleContains('title');
ExpectedConditions.presenceOf(element(by.css('')));
ExpectedConditions.stalenessOf(element(by.css('')));
ExpectedConditions.visibilityOf(element(by.css('')));
ExpectedConditions.invisibilityOf(element(by.css('')));
ExpectedConditions.elementToBeSelected(element(by.css('')));
