import {Component} from '@angular/core';
import {NGB_TOOLTIP_DIRECTIVES, NgbTooltipWindow} from '@ng-bootstrap/tooltip';

@Component({
  selector: 'ngbd-tooltip-basic',
  template: require('./tooltip-basic.html'),
  directives: [NGB_TOOLTIP_DIRECTIVES],
  precompile: [NgbTooltipWindow]
})
export class NgbdTooltipBasic {
}
