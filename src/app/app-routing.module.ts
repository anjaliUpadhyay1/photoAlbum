import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { SliderComponent } from './slider/slider.component';
import { SliderTextComponent } from './slider-text/slider-text.component';
import { HeaderComponent } from './header/header.component';
import { CollageSectionComponent } from './collage-section/collage-section.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactsComponent,
    SliderComponent,
    SliderTextComponent,
    HeaderComponent,
    CollageSectionComponent
  ]
})
export class AppRoutingModule { }
