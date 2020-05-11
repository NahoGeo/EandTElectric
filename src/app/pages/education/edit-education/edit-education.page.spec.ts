import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditEducationPage } from './edit-education.page';

describe('EditEducationPage', () => {
  let component: EditEducationPage;
  let fixture: ComponentFixture<EditEducationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEducationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditEducationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
