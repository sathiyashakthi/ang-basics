import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector:'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
 
  

  constructor() { }

  ngOnInit() {
  }
 @Input('parentData ')  public name
 @Output() public childEvent = new EventEmitter();

 fireEvent()
 {
   this.childEvent.emit("hai this is text from child component");
 }
}

 
