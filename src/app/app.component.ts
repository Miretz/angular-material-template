import { Component } from '@angular/core';
import { MAIN_TITLE } from './core/constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = MAIN_TITLE;

  public constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
