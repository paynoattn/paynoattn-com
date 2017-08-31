import { Observable } from 'rxjs/Rx';

import { SocialMediaAccount } from './socialmedia-account';
import { mockSocialMediaAccounts } from './socialmedia-account.mock';

/* istanbul ignore next */
export class NavigationServiceStub {
  public getAccounts(): Observable<SocialMediaAccount[]> {
    return Observable.of(mockSocialMediaAccounts);
  }
};
