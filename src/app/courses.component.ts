
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    template: `
            <input (keyup.enter)="onKeyUp()" />
            `
})
export class CoursesComponent {
    onKeyUp() {
        // if ($event.keyCode === 13) {
            console.log("ENTER was pressed");
       //  }
    }
}