import { EventvidPage } from './app.po';

describe('eventvid App', () => {
  let page: EventvidPage;

  beforeEach(() => {
    page = new EventvidPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
