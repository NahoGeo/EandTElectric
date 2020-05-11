import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EToolboxPage } from './e-toolbox.page';

describe('EToolboxPage', () => {
  let component: EToolboxPage;
  let fixture: ComponentFixture<EToolboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EToolboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EToolboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
