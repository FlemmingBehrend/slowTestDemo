/* tslint:disable:no-unused-variable */
import {async, TestBed, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import {ConsequencesComponent} from './consequences.component';
import {MaterialModule} from '@angular/material';
import {StakeholderComponent} from '../stakeholder/stakeholder.component';
import {AffectedInsuranceComponent} from '../affected-insurance/affected-insurance.component';
import {HeaderInfoComponent} from '../header-info/header-info.component';
import {PriceInfoComponent} from '../price-info/price-info.component';
import {ActionListComponent} from '../action-list/action-list.component';
import {ConsequenceService} from '../consequence.service';
import {Observable} from 'rxjs';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {ApiConfigService} from '../api-config.service';
import {WindowRefService} from '../window-ref.service';

describe('ConsequencesComponent', () => {

    let fixture: ComponentFixture<ConsequencesComponent>;
    let comp: ConsequencesComponent;
    let consequenceService: ConsequenceService;
    let spy: jasmine.Spy;
    let de: DebugElement;
    let el: HTMLElement;

    const testConsequence = {
        id: '123456',
        policy_holders: [
            {id: '1', eboks_top: true, name: 'Hans', affected_insurances: []},
            {id: '2', eboks_top: true, name: 'Jens', affected_insurances: []},
            {id: '3', eboks_top: true, name: 'Ole', affected_insurances: []}
        ]
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ConsequencesComponent,
                StakeholderComponent,
                AffectedInsuranceComponent,
                HeaderInfoComponent,
                PriceInfoComponent,
                ActionListComponent
            ],
            imports: [
                MaterialModule.forRoot()
            ],
            providers: [
                ConsequenceService,
                ApiConfigService,
                WindowRefService
            ]
        });

        fixture = TestBed.createComponent(ConsequencesComponent);
        comp = fixture.componentInstance;

        consequenceService = fixture.debugElement.injector.get(ConsequenceService);
        spy = spyOn(consequenceService, 'getConsequences').and.returnValue(Observable.of(testConsequence));

        de = fixture.debugElement.query(By.css('.container'));
        el = de.nativeElement;
    }));

    it('should not have any id before OnInit is called', () => {
        expect(spy.calls.any()).toBe(false);
    });

    it('should retrieve consequence when OnInit is called', () => {
        fixture.detectChanges();
        expect(spy.calls.any()).toBe(true);
    });

    it('should not have any stakeholder elements in the dom if no stakeholders are returned by service', fakeAsync(() => {
        spy.and.returnValue(Observable.of({id: '1', policy_holders: []}));
        fixture.detectChanges(); // component init
        tick();
        fixture.detectChanges(); // component lifecycle method onInit
        expect(el.children.length).toBe(0);
    }));

    it('should contain 3 stakeholder elements when consequence have 3 stakeholders', fakeAsync(() => {
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        expect(el.children.length).toBe(3);
    }));

    it('should pass stakeholders to children', fakeAsync(() => {
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        let titles = fixture.debugElement.queryAll(By.css('.title'));
        let hans = titles[0].nativeElement.innerText;
        let jens = titles[1].nativeElement.innerText;
        let ole = titles[2].nativeElement.innerText;
        expect(hans).toBe('Hans, 1, tilmeldt eboks');
        expect(jens).toBe('Jens, 2, tilmeldt eboks');
        expect(ole).toBe('Ole, 3, tilmeldt eboks');
    }));

});
