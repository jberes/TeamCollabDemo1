import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxListModule, IgxAvatarModule, IgxIconModule } from 'igniteui-angular';
import { Demo1Component } from './demo1.component';

describe('Demo1Component', () => {
  let component: Demo1Component;
  let fixture: ComponentFixture<Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo1Component ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxListModule, IgxAvatarModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
