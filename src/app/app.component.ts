import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Output';
onomatopoeiaList : string[] =["splash","boum","crac","bing"];
onReceiveNewOnomatopia(event:string):void{
  this.onomatopoeiaList.push(event);
}


}
