import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia-component',
  templateUrl: './create-onomatopia-component.component.html',
  styleUrls: ['./create-onomatopia-component.component.css']
})
export class CreateOnomatopiaComponentComponent {
newOnomatopia : string ="";

@Output()
sendOnomatopiaToParent : EventEmitter <string>=new EventEmitter();

createOnomatopia() {
  this.sendOnomatopiaToParent.emit(this.newOnomatopia)

}

}
