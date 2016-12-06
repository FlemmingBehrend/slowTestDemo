import {Component, Input} from '@angular/core';
import {ProductInfo} from '../domain-objects/ProductInfo';

@Component({
    selector: 'app-header-info',
    templateUrl: './header-info.component.html',
    styleUrls: ['./header-info.component.scss']
})
export class HeaderInfoComponent {

    @Input() info: ProductInfo;

    constructor() {}

}


