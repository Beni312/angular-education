import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatMenuModule
} from '@angular/material';

const importExport = [
  MatToolbarModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatTooltipModule,
  MatMenuModule
];

@NgModule({
  imports: [
    CommonModule,
    importExport
  ],
  declarations: [],
  exports: [
    importExport
  ]
})
export class MaterialModule { }
