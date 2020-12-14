import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SIDENAV_LINKS } from 'src/app/core/constants';
import { SidenavService } from './sidenav.service';
import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ width: '200px', 'min-width': '200px' })),
      state('closed', style({ width: '64px', 'min-width': '64px' })),
      transition('open => closed', [animate('200ms ease-out')]),
      transition('closed => open', [animate('200ms ease-out')]),
    ]),
    trigger('openCloseContent', [
      state('open', style({ 'margin-left': '156px' })),
      state('closed', style({ 'margin-left': '20px' })),
      transition('open => closed', [animate('200ms ease-out')]),
      transition('closed => open', [animate('200ms ease-out')]),
    ]),
  ],
})
export class SidenavComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') public sidenav!: MatSidenav;

  sidenavLinks = SIDENAV_LINKS;
  isExpanded = false;
  contentAdjusted = false;

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this);
  }

  toggleExpansion(): void {
    this.isExpanded = !this.isExpanded;
    this.contentAdjusted = !this.contentAdjusted;
  }
}
