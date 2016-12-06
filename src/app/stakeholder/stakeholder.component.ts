import {Component, OnInit, Input} from '@angular/core';
import {Stakeholder} from '../domain-objects/Stakeholder';
import {Insurance} from '../domain-objects/Insurance';

@Component({
    selector: 'app-stakeholder',
    templateUrl: './stakeholder.component.html',
    styleUrls: ['./stakeholder.component.scss']
})
export class StakeholderComponent implements OnInit {

    @Input() stakeholder: Stakeholder;
    insurances: Insurance[];

    ngOnInit() {
        this.insurances = this.stakeholder.affected_insurances;
    }

}

