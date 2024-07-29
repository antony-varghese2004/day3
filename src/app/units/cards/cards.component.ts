import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  departments=[
    {
      id:1,
      Title:"",
      Image:"on2.png",
      description:""

    },
    {
      id:2,
      Title:"",
      Image:"on3.jpeg",
      description:""

    },
    {
      id:3,
      Title:"",
      Image:"on4.jpeg",
      description:""

    },
    {
      id:4,
      Title:"",
      Image:"on6.jpeg",
      description:""

    },
    {
      id:5,
      Title:"",
      Image:"on7.jpeg",
      description:""

    },
   {
    id:6,
    Title:"",
    Image:"o1.jpeg",
    description:""

  }, 
 
]
}

