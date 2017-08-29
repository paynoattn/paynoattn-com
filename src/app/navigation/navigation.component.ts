import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';

import { SocialMediaAccount } from '../utils';
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
    private navService: NavigationService,
    private _router: Router
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
