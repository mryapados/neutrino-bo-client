import { environment } from './../../../environments/environment';
import { CrudService } from './crud.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { ToolsModule } from './../../components/common/tools/tools.module';
import { LayoutsModule } from './../../components/common/layouts/layouts.module';
import { ROUTES } from './crud.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ToolbarsComponent } from './list/toolbars/toolbars.component';

@NgModule({
  imports: [
    CommonModule, ToolsModule, SharedModule, FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ListComponent, ToolbarsComponent], 
  providers : [CrudService]
})
export class CrudModule { }
