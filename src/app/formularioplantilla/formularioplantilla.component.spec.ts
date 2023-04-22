import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioplantillaComponent } from './formularioplantilla.component';

describe('FormularioplantillaComponent', () => {
  let component: FormularioplantillaComponent;
  let fixture: ComponentFixture<FormularioplantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioplantillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioplantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
