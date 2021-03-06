import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-audio-component',
  templateUrl: './audio.component.html',
  styleUrls: ["./audio.component.css"]
})

export class AudioComponent {

  arrList = [];
  inputTxtKey = '';

  addToList() {
    if (this.inputTxtKey != '') {
      this.arrList.push(this.inputTxtKey);
    }
  }

  removeItem(index: number) {
    this.arrList.splice(index, 1);
  }
}
