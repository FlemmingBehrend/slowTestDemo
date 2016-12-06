import {Component, OnInit, Input} from '@angular/core';
import {PeriodPrice} from '../domain-objects/PeriodPrice';

@Component({
    selector: 'app-price-info',
    templateUrl: './price-info.component.html',
    styleUrls: ['./price-info.component.scss']
})
export class PriceInfoComponent implements OnInit {

    @Input() price: PeriodPrice;

    constructor() {
    }

    ngOnInit() {
    }

}
