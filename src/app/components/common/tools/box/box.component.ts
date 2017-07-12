import { Tool } from './../../../../models/tool';
import { Label } from './../../../../models/label';
import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() title: String;
  @Input() label: Label;
  @Input() tool: Tool;

  @Output() onCollapse: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  private collapse(): void {
    const ibox = this.elementRef.nativeElement.querySelector('div');
    const button = ibox.querySelector('i');
    const content = this.elementRef.nativeElement.querySelector('.ibox-content');

    jQuery(content).slideToggle(200);
    jQuery(button).toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    jQuery(ibox).toggleClass('').toggleClass('border-bottom');
    setTimeout(() => {
        jQuery(ibox).resize();
        jQuery(ibox).find('[id^=map-]').resize();
    }, 50);

    this.onCollapse.emit();
  }

  private close(): void {
    const content = this.elementRef.nativeElement.querySelector('div');
    jQuery(content).remove();
    this.onClose.emit();
  }

}
