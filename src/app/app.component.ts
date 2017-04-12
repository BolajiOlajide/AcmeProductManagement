import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `
  // <div>
  //   <nav class="navbar navbar-default">
  //     <div class="container-fluid">
  //       <a class="navbar-brand"> {{ pageTitle }} </a>
  //       <ul class='nav navbar-nav'> 
  //         <li><a [routerLink]="['/welcome']"> Home </a></li>
  //         <li><a [routerLink]="['/product']"> Product List </a></li>
  //       </ul>
  //     </div>
  //   </nav>
  // </div>
  // `
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageTitle: string = 'Acme Product Management';
}
