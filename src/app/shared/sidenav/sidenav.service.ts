import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class SidenavService {
  private sidenav: MatSidenav | null = null;

  public setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  public toggle(): void {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}
