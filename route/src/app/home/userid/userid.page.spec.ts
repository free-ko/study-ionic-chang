import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UseridPage } from './userid.page';

describe('UseridPage', () => {
  let component: UseridPage;
  let fixture: ComponentFixture<UseridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseridPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UseridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
