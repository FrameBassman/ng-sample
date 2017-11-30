import { AppPage } from './app.po';

describe('my-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display 8 cards', () => {
    page.navigateTo();
    expect(page.getCardsQuantity()).toEqual(8);
  });
});
