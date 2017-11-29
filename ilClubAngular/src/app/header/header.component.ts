import {Component, OnInit} from '@angular/core';
import {AppService} from '../Services/app-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean;

  constructor(private appService: AppService) {
    this.isMenuOpen = false;
  }

  ngOnInit() {
    this.getIsMenuOpen();
  }

  getIsMenuOpen(): void {
    this.appService.getIsMenuOpen().subscribe(isMenuOpen => {
      console.log('HEADER getIsMenuOpen: ' + isMenuOpen);
      this.isMenuOpen = isMenuOpen;
    });
  }

  menuClicked() {
    this.appService.setIsMenuOpen(!this.isMenuOpen);
  }
}
