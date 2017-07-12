import { NeutrinoBOAppPage } from './app.po';

describe('neutrino-boapp App', () => {
  let page: NeutrinoBOAppPage;

  beforeEach(() => {
    page = new NeutrinoBOAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
