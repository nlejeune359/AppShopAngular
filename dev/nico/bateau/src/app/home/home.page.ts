import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  buttons = [
    {
      name: "Test",
      img: "../../assets/coquillage.png",
      link: ""
    }

    
  ]

  constructor() {}

}

