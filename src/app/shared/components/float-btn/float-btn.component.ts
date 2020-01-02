import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-float-btn',
  templateUrl: './float-btn.component.html',
  styleUrls: ['./float-btn.component.scss']
})
export class FloatBtnComponent implements OnInit {
  @Input() size: number;
  @Input() bgColor = '#3F51B5';
  @Input() fontColor = '#FAFAFA';
  @Output() tap: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onTap(event: any) {
    console.log('tap fab')
  }

}
