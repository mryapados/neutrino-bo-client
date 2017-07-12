import { Label } from './../../../models/label';
import { Tool } from './../../../models/tool';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  label: Label;
  tool: Tool;

  constructor() { }

  ngOnInit() {
    this.label = new Label({label: '51 - 100 of 396', classCss: 'label-primary', pullRight: true});
    this.tool = new Tool({collapseBtn: false, closeBtn: false});
  }

}
