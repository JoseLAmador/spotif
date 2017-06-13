import { ApispotiPage } from './app.po';

describe('apispoti App', () => {
  let page: ApispotiPage;

  beforeEach(() => {
    page = new ApispotiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
