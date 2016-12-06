/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderInfoComponent} from './header-info.component';
import {MaterialModule} from '@angular/material';

describe('HeaderInfoComponent', () => {
    let component: HeaderInfoComponent;
    let fixture: ComponentFixture<HeaderInfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderInfoComponent],
            imports: [
                MaterialModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderInfoComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
