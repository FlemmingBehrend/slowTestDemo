/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {ActionListComponent} from './action-list.component';
import {MaterialModule} from '@angular/material';
import {By} from '@angular/platform-browser';

describe('ActionListComponent', () => {
    let component: ActionListComponent;
    let fixture: ComponentFixture<ActionListComponent>;

    let testActions: any = [
        {
            event_type: 'et1',
            text: 'action text 1'
        },
        {
            event_type: 'et2',
            text: 'action text 2'
        }
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ActionListComponent
            ],
            imports: [
                MaterialModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActionListComponent);
        component = fixture.componentInstance;
        component.actions = testActions;
    });

    it('should have 2 actions after view is initialized', fakeAsync(() => {
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        let parent = fixture.debugElement.query(By.css('.actions'));
        expect(parent.children.length).toBe(2);
    }));

});
