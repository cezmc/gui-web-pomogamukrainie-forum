import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MyPaginatorIntl } from '@app/shared/components/paginator/paginator-init';
import { TranslateService } from '@ngx-translate/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [CommonModule, MatPaginatorModule, FormsModule],
  providers: [
    { provide: MatPaginatorIntl, useFactory: MyPaginatorIntl, deps: [TranslateService] },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
  ],
  exports: [PaginatorComponent],
})
export class PaginatorModule {}
