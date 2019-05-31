import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
message ="welcome to angular...";
  constructor(private router:Router) { }
  onWelcome()
  {
   this.router.navigateByUrl("welcome")
  
  }
  ngOnInit() {
  }

}
