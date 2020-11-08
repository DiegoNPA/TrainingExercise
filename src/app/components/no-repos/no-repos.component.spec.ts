import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoReposComponent } from './no-repos.component';

describe('NoReposComponent', () => {
  let component: NoReposComponent;
  let fixture: ComponentFixture<NoReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
