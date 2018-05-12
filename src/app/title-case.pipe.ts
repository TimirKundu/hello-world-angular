import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    let prepositions = [
      'of',
      'the'
    ];

    let words = value.split(' ');
    for(var i = 0; i < words.length; i++) {
      if (prepositions.includes(words[i])) {
       // words[i] = words[i].toLowerCase;
      } else {
        words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
      }
    }
sss
    return words.join(' ');
  }

}
