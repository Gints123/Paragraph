import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
})
export class HeaderComponent {
  isCollapsed = false;
  showHamburgerMenu = window.innerWidth < 820;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.showHamburgerMenu = (event.target as Window).innerWidth < 820;
  }
}
