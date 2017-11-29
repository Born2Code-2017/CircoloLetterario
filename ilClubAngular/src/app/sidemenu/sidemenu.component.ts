import {Component, OnInit} from '@angular/core';
import {AppService} from '../Services/app-service.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SideMenuComponent implements OnInit {
  isMenuOpen: boolean;

  constructor(private appService: AppService) {
    this.isMenuOpen = false;
  }

  ngOnInit() {
    this.getIsMenuOpen();
    console.log('sei in init');
  }

  getIsMenuOpen(): void {
    console.log('SIDEMENU');
    this.appService.getIsMenuOpen().subscribe(isMenuOpen => {
      console.log('SIDEMENU getIsMenuOpen: ' + isMenuOpen);
      this.isMenuOpen = isMenuOpen;
    });
  }
}
