import { EgenUiPage } from './app.po';

describe('egen-ui App', () => {
  let page: EgenUiPage;

  beforeEach(() => {
    page = new EgenUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
