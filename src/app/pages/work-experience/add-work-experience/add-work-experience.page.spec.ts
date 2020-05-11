import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddWorkExperiencePage } from './add-work-experience.page';

describe('AddWorkExperiencePage', () => {
  let component: AddWorkExperiencePage;
  let fixture: ComponentFixture<AddWorkExperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkExperiencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWorkExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
