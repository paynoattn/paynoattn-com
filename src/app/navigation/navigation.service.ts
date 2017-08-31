import { Injectable } from '@angular/core';
import { SocialMediaAccount } from '../utils';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NavigationService {
  socialMediaAccounts: SocialMediaAccount[];

  constructor() {
    this.socialMediaAccounts = [
      {
        'provider': 'facebook',
        'accountTitle': 'Facebook',
        'link': 'https://www.facebook.com/chrisPawlukiewicz'
      },
      {
        'provider': 'twitter',
        'accountTitle': 'Twitter',
        'link': 'https://twitter.com/@cpawlukiewicz'
      },
      {
        'provider': 'instagram',
        'accountTitle': 'Instagram',
        'link': 'https://www.instagram.com/paynoattn/'
      },
      {
        'provider': 'linkedin',
        'accountTitle': 'LinkedIn',
        'link': 'https://www.linkedin.com/in/christopher-pawlukiewicz-b76b4334?trk'
      }
    ];
  }

  getCategories(): Observable<SocialMediaAccount[]> {
    return Observable.of(this.socialMediaAccounts);
  }
}
