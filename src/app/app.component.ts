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

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("on tapped start icon: ", eventArgs.newValue);
  }
}
