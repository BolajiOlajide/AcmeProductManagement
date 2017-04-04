import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div><h1> {{ pageTitle }} </h1>
  <app-product> Loading ... </app-product>
  </div>`
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
