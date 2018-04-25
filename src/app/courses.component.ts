
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    template: `
            <input #email (keyup.enter)="onKeyUp(email.value)" />
            `
})
export class CoursesComponent {
    onKeyUp(email) {
        // if ($event.keyCode === 13) {
            console.log(email);
       //  }
    }
}