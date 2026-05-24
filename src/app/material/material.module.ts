import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

let MatArr = [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule
    
]


@NgModule({

    imports : [...MatArr],
    exports : [...MatArr]
})


export class MaterialModule{

}