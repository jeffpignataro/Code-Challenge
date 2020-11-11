import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-hero-label',
  templateUrl: './hero-label.component.html',
  styleUrls: ['./hero-label.component.scss']
})
export class HeroLabelComponent implements OnInit {
  @Input() hero: Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

}
