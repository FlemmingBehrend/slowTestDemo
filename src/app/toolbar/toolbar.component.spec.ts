///<reference path="../../../node_modules/@angular/core/src/debug/debug_node.d.ts"/>
/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {ToolbarComponent} from './toolbar.component';
import {By} from '@angular/platform-browser';

describe('ToolbarComponent', () => {

    let component: ToolbarComponent;
    let fixture: ComponentFixture<ToolbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ToolbarComponent
            ],
            imports: [
                MaterialModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create a toolbar with a header', () => {
        fixture = TestBed.createComponent(ToolbarComponent);
        let toolbar = fixture.debugElement.query(By.css('md-toolbar'));
        expect(toolbar).toBeDefined();
    });

});
