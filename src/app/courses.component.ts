
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    template: `
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
            `
})
export class CoursesComponent {
    email = "me@gmail.com"
    onKeyUp() {
        // if ($event.keyCode === 13) {
            console.log(this.email);
       //  }
    }
}