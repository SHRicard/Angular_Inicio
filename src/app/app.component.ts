import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   name = 'Ricardo';
   age = 32;
   btnDisabled = true

toggleButton (){
  this.btnDisabled=!this.btnDisabled;
}
increaseAge(){
  this.age += +1
}
restarAge(){
  this.age += -1
}
onScroll(event : Event){
const element = event.target as HTMLElement;
console.log(element.scrollTop);

}
changeName(event : Event){
const element = event.target as HTMLInputElement;
this.name = element.value;

}



}
