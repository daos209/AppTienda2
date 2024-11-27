import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetasPage } from './ropa.page';

describe('RecetasPage', () => {
  let component: RecetasPage;
  let fixture: ComponentFixture<RecetasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
