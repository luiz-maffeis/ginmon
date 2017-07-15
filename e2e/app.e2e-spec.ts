import { GinmonPage } from './app.po';

describe('ginmon App', () => {
  let page: GinmonPage;

  beforeEach(() => {
    page = new GinmonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
