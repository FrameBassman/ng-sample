import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getCardsQuantity() {
    return element.all(by.css('app-user')).count();
  }
}
