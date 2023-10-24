import { comment } from './../class/comment';
import { Component, Input } from '@angular/core';
import { item } from "../class/item";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  itemValue: String = '';
  commentValue: String = '';
  items: item[] = [
    {id: 1, description: "hello angular", likes: 5}, 
    {id: 2, description: "how are you doing", likes: 3}, 
    {id: 3, description: "today is tuesday", likes: 0}
  ]
  constructor(){}

  addItem(){
    this.items.push({id: this.items.length + 1, description: this.itemValue, likes: 0});
    this.itemValue = '';
  }

  addLike(id: number){
    const item = this.items.find(i => i.id === id);
    if (item){
      item.likes++;
    }
  }

  addComment(){
    
  }
}
