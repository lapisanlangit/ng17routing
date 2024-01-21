import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlamatComponent } from './alamat.component';

describe('AlamatComponent', () => {
  let component: AlamatComponent;
  let fixture: ComponentFixture<AlamatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlamatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
