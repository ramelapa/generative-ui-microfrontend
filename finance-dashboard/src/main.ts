import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, Routes } from '@angular/router';
import { FinanceDashboardComponent } from './app/finance-dashboard/finance-dashboard.component';

const routes: Routes = [
  { path: '', component: FinanceDashboardComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(CommonModule), // ✅ Fixes `ngClass`
    provideRouter(routes) // ✅ Fixes `router-outlet` issue
  ]
}).catch(err => console.error(err));