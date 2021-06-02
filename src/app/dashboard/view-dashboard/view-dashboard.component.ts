import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { environment } from '../../../environments/environment';
import { customTooltips } from '@coreui/chartjs/dist/js/coreui-chartjs.js';
import * as _ from 'lodash';

import { chartConfig } from './chart-options';
import { defaultLocaleWeekdaysShort } from 'ngx-bootstrap/chronos/locale/locale.class';
import { parseClassNames } from '@fullcalendar/common';
@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.scss']
})
export class ViewDashboardComponent implements OnInit {  
  public options = {
    responsive: true,
    tooltips: {
      enabled: false,
      custom: customTooltips,
    },
  };
  public dashboardData = {} as any;
  public chart = chartConfig;  
  radioModel = {
    orders_fulfiled: 'daily',
    customers_served: 'daily',
    average_duration_of_an_order: 'daily'
  }
  constructor(private http: HttpClient) { }

  private params = [
    'orders_fulfilled',
    'customers_signed_up',
    'remote_drivers_online',
    'service_providers_that_have_performed_an_order',
    'orders_performed',
    'customers_served',
    'average_duration_of_an_order',
    'active_bots_and_operators',
    'hours_driven',
    'usage_of_each_appilcation',
    'number_of_bots_deployed_for_each_application',
    'current_orders'
  ];

  public chartData = {} as any;

  ngOnInit(): void {
    this.params.forEach(param => {
      this.http.get(`${environment.apiURL}/dashboard?param=${param}`).subscribe(data => {
        this.dashboardData[param] = data['data'];
        this.dashboardData[param]['display'] = 'daily';
        this.setupChartData(data['dashboard_param']);
      })
    })
  }

  setupChartData(dashboardParam, display = 'daily') {
    if (['orders_performed', 'customers_served'].indexOf(dashboardParam) != -1) {
      this.chartData[dashboardParam] = {
        data: [
          {
            data: this.dashboardData[dashboardParam][display]['customers'],
            label: 'Customers',
          },
          {
            data: this.dashboardData[dashboardParam][display]['orders'],
            label: 'Orders',
          },
        ]
      };
      this.chartData[dashboardParam]['labels'] = this.dashboardData[dashboardParam][display]['dates'];
    }
    if (['average_duration_of_an_order'].indexOf(dashboardParam) != -1) {
      this.chartData[dashboardParam] = {
        data: [
          {
            data: this.dashboardData[dashboardParam][display]['avg_duration'],
            label: 'Average Duration',
          }
        ]
      };
      this.chartData[dashboardParam]['labels'] = this.dashboardData[dashboardParam][display]['dates'];
    }
    if (['usage_of_each_appilcation', 'number_of_bots_deployed_for_each_application'].indexOf(dashboardParam) != -1) {
      this.chartData[dashboardParam] = {
        data: (dashboardParam == 'number_of_bots_deployed_for_each_application') ? this.dashboardData[dashboardParam]['number_of_bots_deployed'] : this.dashboardData[dashboardParam]['number_of_orders'],
        labels: this.dashboardData[dashboardParam]['application_name']
      };
    }
    if (dashboardParam == 'active_bots_and_operators') {
      this.dashboardData['active_bots_and_operators'] = {
        mobility_devices: parseInt(this.dashboardData['active_bots_and_operators']['mobilty_devices']),
        remote_operators: parseInt(this.dashboardData['active_bots_and_operators']['remote_operators']),
      }
    }

    if(dashboardParam == 'hours_driven'){
      this.chartData[dashboardParam] = {
        data: [
          {
            data: this.dashboardData[dashboardParam]['y-no_of_bots'],
            label: 'Number of bots',
          }
        ]
      };
      this.chartData[dashboardParam]['labels'] = this.dashboardData[dashboardParam]['x-driven_time'];
    }

  }



}
