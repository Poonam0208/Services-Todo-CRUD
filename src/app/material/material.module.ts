import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

let MatArr = [
    MatCardModule,
    MatButtonModule,
    MatIconModule
]


@NgModule({

    imports : [...MatArr],
    exports : [...MatArr]
})


export class MaterialModul{

}