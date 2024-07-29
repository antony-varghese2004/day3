import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./units/navbar/navbar.component";
import { CarouselComponent } from './units/carousel/carousel.component';
import { CardsComponent } from './units/cards/cards.component';
import { AccordionComponent } from './units/accordion/accordion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CarouselComponent,CardsComponent,AccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myangularproject';
}
