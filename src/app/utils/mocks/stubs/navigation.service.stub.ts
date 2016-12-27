import { Observable } from 'rxjs/Rx';

import { SocialMediaAccount } from '../../models';
import { mockSocialMediaAccounts } from '../models';

export class NavigationServiceStub {
  public getCategories(): Observable<SocialMediaAccount[]> {
    return Observable.of(mockSocialMediaAccounts);
  }
};
