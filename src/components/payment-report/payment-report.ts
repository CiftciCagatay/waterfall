import { Component, ViewChild } from '@angular/core';
import { ReportsDbServiceProvider } from "../../providers/Database_Service_Providers/reports-db-service/reports-db-service";
import { LoadingController } from "ionic-angular";
import { Chart } from 'chart.js';

@Component({
  selector: 'payment-report',
  templateUrl: 'payment-report.html'
})
export class PaymentReportComponent {

  @ViewChild('paymentCanvas') paymentCanvas;
  paymentChart: any;
  totalAmount = 0.0;
  payments = [];

  constructor(
    private rds: ReportsDbServiceProvider,
    private loadingCtrl: LoadingController
  ) {
    this.getPaymentReport().subscribe(response => {
      this.payments = response.json()
      this.totalAmount = this.calculateTotalAmount(this.payments)
      this.paymentChart = this.getBarChart(this.payments);
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

    return this.getChart(this.paymentCanvas.nativeElement, "bar", data);
  }

  getChart(context, chartType, data) {
    return new Chart.Bar(context, {
      type: chartType,
      data: data,
      options: {
        showTooltips: false,
        animation:  {
          onComplete: function () {

            var ctx = this.chart.ctx;
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";

            this.data.datasets.forEach(function (dataset) {
              console.log(dataset)
              dataset.data.forEach(function (points) {
                ctx.fillText(points.value, points.x, points.y - 10);
              });
            })
          }
        }

      }
    })
  }

  getPaymentReport(minDate = "0-1-1", maxDate = "9999-12-30") {
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
      this.payments = response.json();


      this.totalAmount = this.calculateTotalAmount(this.payments)

      this.paymentChart.data.labels = Array.from(this.payments, x => x['_id']);
      this.paymentChart.data.datasets[0].data = Array.from(this.payments, x => x['totalAmount']);
      this.paymentChart.update();

      loading.dismiss();
    })
  }

  calculateTotalAmount(payments) {
    let totalAmount = 0.0;

    for (const payment of payments) {
      totalAmount += payment.totalAmount;
    }

    console.log(totalAmount);

    return totalAmount;
  }

}
