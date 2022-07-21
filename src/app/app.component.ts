import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText:string = lorem.sentence();
  inputText:string ='';


  onInputText(text : Event){
    this.inputText = (text.target as HTMLInputElement).value;

  }

  compare(ranadomChar: string, enterChar:string){
    if(!enterChar){
      return 'pending';
    }
    return ranadomChar === enterChar ? 'correct' : 'incorrect';
    
  }
}
