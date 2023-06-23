import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {RecargasComponent} from './recargas.component';
import { RecargasService } from '../recargas.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RecargasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    RecargasComponent
  ],
  providers: [RecargasService],
})
export class RecargasModule { }
