import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Caixanota } from './caixanota';

describe('Caixanota', () => {
  let component: Caixanota;
  let fixture: ComponentFixture<Caixanota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caixanota],
    }).compileComponents();

    fixture = TestBed.createComponent(Caixanota);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
