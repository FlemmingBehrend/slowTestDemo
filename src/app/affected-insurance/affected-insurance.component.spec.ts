/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AffectedInsuranceComponent} from './affected-insurance.component';
import {HeaderInfoComponent} from '../header-info/header-info.component';
import {MaterialModule} from '@angular/material';
import {PriceInfoComponent} from '../price-info/price-info.component';
import {ActionListComponent} from '../action-list/action-list.component';

describe('AffectedInsuranceComponent', () => {
    let component: AffectedInsuranceComponent;
    let fixture: ComponentFixture<AffectedInsuranceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
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
        fixture = TestBed.createComponent(AffectedInsuranceComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
