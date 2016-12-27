import { PaynoattnComPage } from './app.po';

describe('paynoattn-com App', function() {
  let page: PaynoattnComPage;

  beforeEach(() => {
    page = new PaynoattnComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hi, my name is Chris');
  });
});
