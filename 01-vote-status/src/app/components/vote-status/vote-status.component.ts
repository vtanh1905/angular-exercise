import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-status',
  templateUrl: './vote-status.component.html',
  styleUrls: ['./vote-status.component.scss'],
})
export class VoteStatusComponent {
  isRateToogle = false;
  listRate = ["Hate", "Bad", "Like", "Love", "Good"];
  rateSelected = "Nothing"

  onClickRate($event: any) {
    this.rateSelected = $event.target.text;
  }
}
