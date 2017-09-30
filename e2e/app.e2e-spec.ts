import { FooBarLabsPage } from './app.po';

describe('foo-bar-labs App', () => {
  let page: FooBarLabsPage;

  beforeEach(() => {
    page = new FooBarLabsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
