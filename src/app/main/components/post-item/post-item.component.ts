import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() author!: string;
  @Input() date: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
