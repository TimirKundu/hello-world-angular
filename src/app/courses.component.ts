
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    template: `
            <div (click)="onDivClicked()" >
                <button (click)="onSave($event)">Save Me</button>
            </div>
            `
})
export class CoursesComponent {

    onDivClicked() {
        console.log("On Div Clicked,,,,,,")
    }

    onSave($event) {
        $event.stopPropagation()
        console.log("Button was clicked", $event);
    }
}