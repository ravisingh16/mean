import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'


})
export class DataService {
  private goals = new BehaviorSubject<any> (['The Intial goal', 'Another Silly life goal']);
  goal= this.goals.asObservable();
  
  
  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
