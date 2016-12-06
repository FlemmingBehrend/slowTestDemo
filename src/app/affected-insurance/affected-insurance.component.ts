import {Component, Input} from '@angular/core';
import {Insurance} from '../domain-objects/Insurance';

@Component({
    selector: 'app-affected-insurance',
    templateUrl: './affected-insurance.component.html',
    styleUrls: ['./affected-insurance.component.scss']
})
export class AffectedInsuranceComponent {

    @Input() insurance: Insurance;

    constructor() {
    }

}
