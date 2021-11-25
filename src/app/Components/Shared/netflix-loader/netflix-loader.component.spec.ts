import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixLoaderComponent } from './netflix-loader.component';

describe('NetflixLoaderComponent', () => {
  let component: NetflixLoaderComponent;
  let fixture: ComponentFixture<NetflixLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetflixLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetflixLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
