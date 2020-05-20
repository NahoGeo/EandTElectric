import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobOportunityPage } from './job-oportunity.page';

describe('JobOportunityPage', () => {
  let component: JobOportunityPage;
  let fixture: ComponentFixture<JobOportunityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOportunityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobOportunityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
