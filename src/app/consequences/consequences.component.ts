import {Component, OnInit} from '@angular/core';
import {ConsequenceService} from '../consequence.service';
import {Stakeholder} from '../domain-objects/Stakeholder';

@Component({
    selector: 'app-consequences',
    templateUrl: './consequences.component.html',
    styleUrls: ['./consequences.component.scss']
})
export class ConsequencesComponent implements OnInit {

    stakeholders: Stakeholder[];
    errorMsg: string;

    constructor(private service: ConsequenceService) {
    }

    ngOnInit() {
        // TODO hardcoded eksp id for now, needs to be changed when routing is implemented
        this.service.getConsequences('744420668').subscribe(
            consequence => this.stakeholders = consequence.policy_holders,
            error => this.errorMsg = <any>error
        );
    }


}
