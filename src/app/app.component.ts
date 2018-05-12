import { FavoriteChangedEventArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite : false    
  }

  tweet = {
    body: 'Here is the body of a tweet.....',
    isLiked: false,
    likesCount: 500ss
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("on tapped start icon: ", eventArgs.newValue);
  }
  courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
  ]
}
