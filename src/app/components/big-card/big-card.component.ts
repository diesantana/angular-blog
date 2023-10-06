import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card-responsive.css']
})
export class BigCardComponent implements OnInit {
  @Input() titleNews: string = '';
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Input() description: string = '';
  @Input() dateNews: string = '';
  @Input() id: string = '0';

  
  constructor() { }

  ngOnInit(): void {
  }

}
