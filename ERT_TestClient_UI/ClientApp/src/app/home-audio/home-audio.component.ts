import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-home-audio-component',
  templateUrl: './home-audio.component.html',
  styleUrls: ["./home-audio.component.css"]
})

export class HomeAudioComponent {

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
