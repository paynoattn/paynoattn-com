import { Observable } from 'rxjs/Rx';

import { SocialMediaAccount } from './socialmedia-account';
import { mockSocialMediaAccounts } from './socialmedia-account.mock';

export class NavigationServiceStub {
  public getCategories(): Observable<SocialMediaAccount[]> {
    return Observable.of(mockSocialMediaAccounts);
  }
};
