import { AcmePage } from './app.po';

describe('acme App', () => {
  let page: AcmePage;

  beforeEach(() => {
    page = new AcmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
