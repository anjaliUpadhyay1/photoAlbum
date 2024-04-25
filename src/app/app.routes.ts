import { Routes } from '@angular/router';
import { SliderTextComponent } from './slider-text/slider-text.component';

export const routes: Routes = [
    {path: "testimonals",
        component: SliderTextComponent,
        pathMatch: "full"
    }
];
