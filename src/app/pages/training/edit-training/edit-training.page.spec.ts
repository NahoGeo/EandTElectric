import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTrainingPage } from './edit-training.page';

describe('EditTrainingPage', () => {
  let component: EditTrainingPage;
  let fixture: ComponentFixture<EditTrainingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrainingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTrainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
