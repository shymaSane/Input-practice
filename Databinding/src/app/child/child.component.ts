import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
private _hero = " ";
@Input()
set hero(hero: string){
  this._hero = (hero && hero.trim()) || '<no name set>'
} 
get hero(): string {return this._hero}


@Input("master") masterName: string; 
  constructor() { }

  ngOnInit() {
  }

}
