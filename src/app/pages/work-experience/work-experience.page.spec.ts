import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkExperiencePage } from './work-experience.page';

describe('WorkExperiencePage', () => {
  let component: WorkExperiencePage;
  let fixture: ComponentFixture<WorkExperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperiencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
