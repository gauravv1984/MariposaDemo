import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.page.html',
  styleUrls: ['./admin-sign-in.page.scss'],
})
export class AdminSignInPage implements OnInit {
  type: string;
  
  
  constructor() {
    
   }

  ngOnInit() {
    this.type = 'signin';
  }
  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
