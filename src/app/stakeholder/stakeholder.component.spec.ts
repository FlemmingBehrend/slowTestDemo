/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {StakeholderComponent} from './stakeholder.component';
import {MaterialModule} from '@angular/material';
import {AffectedInsuranceComponent} from '../affected-insurance/affected-insurance.component';
import {HeaderInfoComponent} from '../header-info/header-info.component';
import {PriceInfoComponent} from '../price-info/price-info.component';
import {ActionListComponent} from '../action-list/action-list.component';

describe('StakeholderComponent', () => {
    let component: StakeholderComponent;
    let fixture: ComponentFixture<StakeholderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StakeholderComponent,
                AffectedInsuranceComponent,
                HeaderInfoComponent,
                PriceInfoComponent,
                ActionListComponent
            ],
            imports: [
                MaterialModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StakeholderComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        // expect(component).toBeTruthy();
    });
});
