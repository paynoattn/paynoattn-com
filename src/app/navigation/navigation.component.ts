import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { SocialMediaAccount } from './socialmedia-account';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [ NavigationService ]
})

export class NavigationComponent implements OnInit {
  @Input() isWelcome = false;
  @Output() leaving = new EventEmitter();
  socialMediaAccounts: SocialMediaAccount[];
  hamburger: boolean = false;

  constructor(
    private navService: NavigationService
  ) { }

  getCategories() {
    return this.navService.getCategories();
  }

  ngOnInit() {
    this.getCategories().subscribe((accounts) => {
      this.socialMediaAccounts = accounts;
    });
  }
}
