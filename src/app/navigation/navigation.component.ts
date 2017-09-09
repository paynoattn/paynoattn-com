import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { AppService } from '../app.service';
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
  hamburger = false;

  constructor(
    private appSvc: AppService,
    private navService: NavigationService
  ) { }

  ngOnInit() {
    this.navService.getAccounts().subscribe((accounts) => {
      this.socialMediaAccounts = accounts;
    });
  }

  close() {
    this.leaving.emit(true);
    this.appSvc.updateModal(false);
  }
}
