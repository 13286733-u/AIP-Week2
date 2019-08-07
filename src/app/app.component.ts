import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = 'Sleep';

  change() {
    switch (this.status) {
      case 'Sleep':
        this.status = 'Study';
        break;
      case 'Study':
        this.status = 'Party';
        break;
      case 'Party':
        this.status = 'Sleep';
        break;
    }
  }
}
