///<reference path="../../../node_modules/@angular/core/src/debug/debug_node.d.ts"/>
/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ToolbarComponent} from "./toolbar.component";
import {By} from "@angular/platform-browser";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ToolbarComponent', () => {

  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a toolbar with a header', () => {
    fixture = TestBed.createComponent(ToolbarComponent);
    let toolbar = fixture.debugElement.query(By.css('p-toolbar'));
    expect(toolbar.nativeElement.innerHTML).toBe('Konsekvens');
  });

});
