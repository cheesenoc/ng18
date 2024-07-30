import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
 
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar color="primary">
      <span>{{pageTitle}}</span>
      <button mat-raised-button>{{buttonTitle}}</button>
      <mat-icon aria-hidden="false" aria-label="Example icon" fontIcon="{{icon}}"></mat-icon>
    </mat-toolbar>
  `,
  styles: ``,
})
export class NavBarComponent {
  @Input()
  pageTitle?: string;
  @Input()
  buttonTitle?: string;
  @Input()
  icon?: string;
}