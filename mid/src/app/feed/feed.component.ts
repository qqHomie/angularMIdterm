import { Component } from '@angular/core';
import { feed } from "../class/feed";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  feeds: feed[] = [
    {title: 'feed 1', description: 'description 1'},
    {title: 'feed 2', description: 'description 2'},
    {title: 'feed 3', description: 'description 3'},
    {title: 'feed 4', description: 'description 4'},
  ]
}
