import { Component } from '@angular/core';
import { noop } from 'rxjs';

@Component({
  selector: 'app-primary-nav-bar',
  templateUrl: './primary-nav-bar.component.html',
  styleUrls: ['./primary-nav-bar.component.css']
})
export class PrimaryNavBarComponent {
  admin = true;
  connected = true;
}
