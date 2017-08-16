import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EventDbServiceProvider } from "../../providers/Database_Service_Providers/event-db-service/event-db-service";
import { ReportsDbServiceProvider } from "../../providers/Database_Service_Providers/reports-db-service/reports-db-service";

import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events = [];

  @ViewChild('paymentBarCanvas') paymentBarCanvas;
  paymentReportData: any;
  paymentData = [];

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private eds: EventDbServiceProvider,
    private rds: ReportsDbServiceProvider
  ) {
    this.eds.getEvents().subscribe(
      (data) => this.events = data.json(),
      (error) => console.log(error)
    );
  }

  ionViewDidLoad() {
    this.getPaymentReport().subscribe(response => {
      this.paymentData = response.json()
      this.paymentReportData = this.getBarChart(this.paymentData);
      console.log(this.paymentReportData);
    })
  }

  getBarChart(paymentData: Array<any>) {
    let months = Array.from(paymentData, x => x._id);
    let totalAmounts = Array.from(paymentData, x => x.totalAmount);

    let data = {
      labels: months,
      datasets: [{
        label: 'Toplam Alınan Ödeme',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)'
        ],
        data: totalAmounts,
        borderWidth: 1
      }]
    };

    let options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    return this.getChart(this.paymentBarCanvas.nativeElement, "bar", data, options);
  }

  getChart(context, chartType, data, options?) {
    return new Chart(context, {
      type: chartType,
      data: data,
      options: options
    });
  }

  getPaymentReport(minDate="0-1-1", maxDate="9999-12-30") {
    return this.rds.getPaymentReport(minDate, maxDate);
  }

  refreshChart(
    minDateParts = { day: 1, month: 1, year: 0 },
    maxDateParts = { day: 30, month: 12, year: 9999 }
  ) {
    let loading = this.loadingCtrl.create({ content: "Rapor yükleniyor..." });

    loading.present();

    this.getPaymentReport(
      `${minDateParts.year}/${minDateParts.month}/${minDateParts.day}`,
      `${maxDateParts.year}/${maxDateParts.month}/${maxDateParts.day}`
    ).subscribe(response => {
      this.paymentData = response.json();

      console.log(this.paymentData);

      this.paymentReportData.data.labels = Array.from(this.paymentData, x => x._id);
      this.paymentReportData.data.datasets[0].data = Array.from(this.paymentData, x => x.totalAmount);
      this.paymentReportData.update();

      loading.dismiss();
    })
  }
}
