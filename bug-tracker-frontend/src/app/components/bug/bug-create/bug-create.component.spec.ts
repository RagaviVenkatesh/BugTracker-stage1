import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugCreateComponent } from './bug-create.component';

describe('BugCreateComponent', () => {
  let component: BugCreateComponent;
  let fixture: ComponentFixture<BugCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BugCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
