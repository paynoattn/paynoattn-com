import { PaynoattnComPage } from './app.po';

describe('paynoattn App', () => {
  let page: PaynoattnComPage;

  beforeEach(() => {
    page = new PaynoattnComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hi, my name is Chris');
  });
});
