import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // ✅ Fix for `ngClass` and `*ngFor`

@Component({
  selector: 'app-finance-dashboard',
  standalone: true, // ✅ Use standalone component
  imports: [CommonModule], // ✅ Add `CommonModule` for `ngClass` and `ngFor`
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.scss']
})
export class FinanceDashboardComponent implements OnInit {
  uiConfig: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/ui-config?role=Finance').subscribe(data => {
      this.uiConfig = data;
    });
  }
}
