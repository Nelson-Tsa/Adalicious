import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCuisine } from './ticket-cuisine';

describe('TicketCuisine', () => {
  let component: TicketCuisine;
  let fixture: ComponentFixture<TicketCuisine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketCuisine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketCuisine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
