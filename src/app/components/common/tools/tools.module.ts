import { BoxComponent } from './../tools/box/box.component';
import { LabelComponent } from './../tools/label/label.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { ICheckComponent } from './i-check/i-check.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LabelComponent, BoxComponent, TestComponent, ICheckComponent],
  exports: [LabelComponent, BoxComponent, ICheckComponent]
})
export class ToolsModule { }
