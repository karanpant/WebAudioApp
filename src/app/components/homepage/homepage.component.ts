import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  headerImageLocation: string = "https://a-v2.sndcdn.com/assets/images/home/hp_image-6155d6b.jpg";
  signInStatus = false;

  accountVerification(){
    console.log('Account Clicked');

  }


  constructor() { }

  ngOnInit() {
  }

}
