import {Component} from '@angular/core';
import {NGB_PROGRESSBAR_DIRECTIVES} from '@ng-bootstrap/progressbar';

@Component({
  selector: 'ngbd-progressbar-basic',
  template: require('./progressbar-basic.html'),
  directives: [NGB_PROGRESSBAR_DIRECTIVES]
})
export class NgbdProgressbarBasic {
}
