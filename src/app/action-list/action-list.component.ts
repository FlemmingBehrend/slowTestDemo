import {Component, Input} from '@angular/core';
import {Action} from '../domain-objects/Action';

@Component({
    selector: 'app-action-list',
    templateUrl: './action-list.component.html',
    styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent {

    @Input() actions: Action[];

    constructor() {
    }

}
