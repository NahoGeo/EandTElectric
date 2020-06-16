import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WireAndConduitPage } from './wire-and-conduit.page';

describe('WireAndConduitPage', () => {
  let component: WireAndConduitPage;
  let fixture: ComponentFixture<WireAndConduitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireAndConduitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WireAndConduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
