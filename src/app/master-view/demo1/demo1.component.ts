import { Component, OnDestroy, OnInit } from '@angular/core';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';
import { Subject, takeUntil } from 'rxjs';
import { CategoriesType } from '../../models/northwind/categories-type';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit, OnDestroy {
  dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };
  private destroy$: Subject<void> = new Subject<void>();
  public northwindCategories: CategoriesType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {
RevealSdkSettings.serverUrl = 'https://samples.revealbi.io/upmedia-backend/reveal-api/'
}

  ngOnInit() {
    this.northwindService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCategories = data,
      error: (_err: any) => this.northwindCategories = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
