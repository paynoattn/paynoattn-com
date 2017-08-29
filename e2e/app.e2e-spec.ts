import { DudePage } from './app.po';

describe('dude App', () => {
  let page: DudePage;

  beforeEach(() => {
    page = new DudePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
