import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyselectorComponent } from './currencyselector.component';

describe('CurrencyselectorComponent', () => {
  let component: CurrencyselectorComponent;
  let fixture: ComponentFixture<CurrencyselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyselectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrencyselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
