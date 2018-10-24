import { Component, OnInit } from "@angular/core";
import * as d3 from "d3";

@Component({
  selector: 'moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.scss']
})

export class MoodsComponent implements OnInit {
  store: any = {};

  inputs: Object = {
    home: ''
  }
  moods$: Object;
  
  // manage screens
  // 1. Home page - isHome = true
  // 2. Moods page - isHome = false
  isHome: boolean = true;

  constructor() {
    // this.store = {};
    this.initSvg();
  }

  handleClick() {
    this.drawCircle({});
  }

  initSvg() {
    this.store.area = {
      width: innerWidth,
      height: innerHeight
    }

    this.store.el = d3.select('section')
      .append('svg')
      .attr('width', this.store.width)
      .attr('height', this.store.height);
  }

  ngOnInit() {
    console.log('init Moods ....');
    // this.data.getUser(this.user$).subscribe(
    //   data => this.user$ = data
    // )
    this.drawCircle({});
  }


  drawCircle (data: Object) {

    console.log('d3:::', d3, this.store.el);
    this.store.el = d3.select('section')
      .append('svg')
      .attr('width', this.store.width)
      .attr('height', this.store.height);

    this.store.el.append('circle')
      .attr('cx', 100)
      .attr('cy', 80)
      .attr('r', 100)
      .attr('fill', 'none')
      .attr('stroke', 'white')

    this.store.el.append('circle')
      .attr('cx', 100)
      .attr('cy', 80)
      .attr('r', 50)
      .attr('fill', 'none')
      .attr('stroke-width', '3px')
      .attr('stroke', 'white')
  }

}
