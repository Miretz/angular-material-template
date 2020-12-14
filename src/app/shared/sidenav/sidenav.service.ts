import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav.component';

@Injectable()
export class SidenavService {
  private sidenav: SidenavComponent | null = null;

  public setSidenav(sidenav: SidenavComponent): void {
    this.sidenav = sidenav;
  }

  public toggle(): void {
    if (this.sidenav) {
      this.sidenav.toggleExpansion();
    }
  }
}
