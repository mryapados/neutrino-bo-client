import { TranslateService } from '@ngx-translate/core';
import { Tool } from './../../models/tool';
import { Label } from './../../models/label';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.template.html'
})
export class HomeComponent implements OnInit {
  label: Label;
  tool: Tool;

  constructor(translate: TranslateService) { }

  ngOnInit() {

  }
}
