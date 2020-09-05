import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sds-profile-card',
  templateUrl: './sds-profile-card.component.html',
  styleUrls: ['./sds-profile-card.component.css']
})
export class SdsProfileCardComponent implements OnInit {

  @Input() name: string;
  @Input() email: string;
  @Input() url: string;
  @Input() company: string;

  constructor() { }

  ngOnInit() {
  }

}
