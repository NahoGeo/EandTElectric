import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditWorkExperiencePage } from './edit-work-experience.page';

describe('EditWorkExperiencePage', () => {
  let component: EditWorkExperiencePage;
  let fixture: ComponentFixture<EditWorkExperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkExperiencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditWorkExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
