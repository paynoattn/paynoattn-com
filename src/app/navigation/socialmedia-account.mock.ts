import { SocialMediaAccount } from './socialmedia-account';

export const mockSocialMediaAccount1: SocialMediaAccount = {
  provider: 'facebook',
  accountTitle: 'facebook',
  link: 'http://facebook.com'
};

export const mockSocialMediaAccount2: SocialMediaAccount = {
  provider: 'twitter',
  accountTitle: 'twitter',
  link: 'http://twitter.com'
};

export const mockSocialMediaAccounts = [
  mockSocialMediaAccount1,
  mockSocialMediaAccount2
];
