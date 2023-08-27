import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;

buttonClass:string = "btn-primary"
  changeButtonClass(eventName:string){
    console.log("Evento de mouse" ,{eventName})
    if(eventName === 'mouseenter'){
      this.buttonClass= "btn-danger"
    }
    if(eventName === 'mouseleave'){
      this.buttonClass= "btn-primary"
    }
    if(eventName === 'mousewheel'){
      this.buttonClass= "btn-warning"
    }
  }

selectedHero?:Hero;
onSelected(hero:Hero): void{
  this.selectedHero=hero;
  console.log("Selected hero:",hero);
  
}
}

