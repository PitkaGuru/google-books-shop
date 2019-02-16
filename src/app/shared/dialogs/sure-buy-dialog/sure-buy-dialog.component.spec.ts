import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SureBuyDialogComponent } from './sure-buy-dialog.component';


describe('DialogComponent', () => {
  let component: SureBuyDialogComponent;
  let fixture: ComponentFixture<SureBuyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SureBuyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SureBuyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
