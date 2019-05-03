import {MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule,
        MatGridListModule,
        MatDatepickerModule,
        MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, 
            MatCheckboxModule, 
            MatToolbarModule,
            MatGridListModule,
            MatDatepickerModule,
            MatInputModule],
  exports: [MatButtonModule, 
            MatCheckboxModule, 
            MatToolbarModule,
            MatGridListModule,
            MatDatepickerModule,
            MatInputModule],
})
export class MaterialModule { }