import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CollageSectionComponent } from "./collage-section/collage-section.component";
import { SliderComponent } from "./slider/slider.component";
import { SliderTextComponent } from "./slider-text/slider-text.component";
import { ContactsComponent } from "./contacts/contacts.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, CollageSectionComponent, SliderComponent, SliderTextComponent, ContactsComponent]
})
export class AppComponent {
  title = 'photoAlbum';
}
