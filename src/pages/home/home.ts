import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

declare let window: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public spokenWords : Array<string> = new Array<string>();

  constructor(public navCtrl: NavController) { }

  SpeechToText() {
    window.plugins.speechrecognizer.startRecognize((result) =>{
      this.spokenWords.push(result);
    }, (errorMessage) => {
      alert(errorMessage)
    })
  }

}
