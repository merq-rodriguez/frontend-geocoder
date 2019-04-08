import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() id
  constructor() { }

  ngOnInit() {}

  
  
   player: YT.Player;
  // id: string = 'qDuKsiwS5xw';
 
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  
  onStateChange(event) {
    console.log('player state', event.data);
  }
  

}
