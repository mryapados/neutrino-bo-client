import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input() label:	String;
  @Input() classCss:	String;
  @Input() pullRight:	Boolean;

  constructor() { }

  ngOnInit() {

  }

}
