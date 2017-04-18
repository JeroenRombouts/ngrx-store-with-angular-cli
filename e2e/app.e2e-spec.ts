import { StoreExamplePage } from './app.po';

describe('store-example App', () => {
  let page: StoreExamplePage;

  beforeEach(() => {
    page = new StoreExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
