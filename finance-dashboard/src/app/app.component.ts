import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FinanceDashboardComponent } from './finance-dashboard/finance-dashboard.component'; // ✅ Import FinanceDashboardComponent

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [CommonModule, RouterModule, FinanceDashboardComponent], // ✅ Register FinanceDashboardComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finance-dashboard';
}
