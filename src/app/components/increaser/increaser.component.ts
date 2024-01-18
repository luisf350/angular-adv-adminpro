import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styleUrl: './increaser.component.css',
})
export class IncreaserComponent implements OnInit {
  
  @Input()
  progressValue: number = 50;
  @Input()
  btnClassName: string = 'btn-primary';

  @Output()
  outputValue: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClassName = `btn ${this.btnClassName}`;
  }

  Add(): void {
    this.progressValue = this.progressValue + 5;
    if (this.progressValue > 100) {
      this.progressValue = 100;
    }
    this.outputValue.emit(this.progressValue);
  }

  Substract(): void {
    this.progressValue = this.progressValue - 5;
    if (this.progressValue < 0) {
      this.progressValue = 0;
    }

    this.outputValue.emit(this.progressValue);
  }

  onChange(value:number):void{
    if (value < 0) {
      this.progressValue = 0;
    } else if(value > 100) {
      this.progressValue = 100;
    }else {
      this.progressValue = value;
    }
    console.log(this.progressValue);
    
    this.outputValue.emit(this.progressValue);
  }
}
