import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent {
/* Set the width of the side navigation to 250px */
 openNav() {
  (document.getElementById('mySidenav') as HTMLElement).style.width = "250px";
}

/* Set the width of the side navigation to 0 */
 closeNav() {
  (document.getElementById("mySidenav") as HTMLElement).style.width = "0";
}

add(){
  (document.querySelector("body") as HTMLElement).classList.toggle("active");
}
}
