import { TranslateService } from '@ngx-translate/core';
import { Tool } from './../../models/tool';
import { Label } from './../../models/label';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mainView',
    templateUrl: 'main-view.template.html'
})
export class MainViewComponent implements OnInit {
  label: Label;
  tool: Tool;

  constructor(translate: TranslateService) { }

  ngOnInit() {
    this.label = new Label({label: 'cousscou', classCss: 'label-primary'});
    this.tool = new Tool({collapseBtn: true, closeBtn: true});
  }
}
