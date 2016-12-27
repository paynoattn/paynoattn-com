import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { SocialMediaAccount } from '../utils';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [NavigationService]
})

export class NavigationComponent implements OnInit {
  @Input() isWelcome: boolean = false;
  @Output() leaving = new EventEmitter();
  socialMediaAccounts: SocialMediaAccount[];
  hamburger: boolean = false;

  constructor(
    private navService: NavigationService
  ) { }

  getCategories() {
    return this.navService.getCategories();
  }

  showHamburger() {
    this.hamburger = !this.hamburger;
  }

  passShowHide(instruction: boolean) {
    this.leaving.emit({ value: true });
  }

  ngOnInit() {
    this.getCategories().subscribe((accounts) => {
      this.socialMediaAccounts = accounts;
    });
  }
}
