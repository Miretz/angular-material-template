import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MAIN_TITLE } from 'src/app/core/constants';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private sidenav: SidenavService) {}

  mainTitle = MAIN_TITLE;

  toggleSidenav(): void {
    this.sidenav.toggle();
  }

  ngOnInit(): void {}
}
