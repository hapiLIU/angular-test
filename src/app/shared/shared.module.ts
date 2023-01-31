import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';


const THIRD_MODULES = [
  ReactiveFormsModule,
  MaterialModule,
];

const COMPONENTS: never[] = [
];

const COMPONENTS_DYNAMIC: never[] = [];
const DIRECTIVES: never[] = [];
const PIPES: never[] = [];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ...DIRECTIVES, ...PIPES],
  imports: [
    HttpClientModule,
    CommonModule,
    // PdfViewerModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...THIRD_MODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...THIRD_MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class SharedModule { }
