import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@elmtree/web';

@Component({
  selector: 'et-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
