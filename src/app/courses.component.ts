
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    template: `
    {{ course.title | uppercase | lowercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number: '2.1-1' }} <br/>
    {{ course.price | currency: 'INR' }} <br/>
    {{ course.releaseDate | date: 'shortDate' }}`
})
export class CoursesComponent {
    course = {
        title: "The complete angular course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016,3,1)
    }
}