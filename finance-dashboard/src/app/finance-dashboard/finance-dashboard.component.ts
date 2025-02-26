import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-finance-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.scss']
})
export class FinanceDashboardComponent implements OnInit {
  uiConfig: any = null;
  userRole: string = 'Finance'; // This can be dynamically set

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchUIConfig();
  }

  fetchUIConfig() {
    this.http.get(`http://localhost:3003/api/ui-config?role=${this.userRole}`).subscribe(data => {
      this.uiConfig = data;
    });
  }
}