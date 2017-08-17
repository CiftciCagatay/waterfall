import { Component, ViewChild } from '@angular/core';
import { ReportsDbServiceProvider } from "../../providers/Database_Service_Providers/reports-db-service/reports-db-service";
import { LoadingController } from "ionic-angular";
import { Chart } from 'chart.js';

@Component({
  selector: 'product-report',
  templateUrl: 'product-report.html'
})
export class ProductReportComponent {

  @ViewChild('productCanvas') productCanvas;
  productChart: any;
  products = [];

  constructor(
    private rds: ReportsDbServiceProvider,
    private loadingCtrl: LoadingController
  ) {
    this.getProductReport().subscribe(response => {
      this.products = response.json()
      this.productChart = this.getBarChart(this.products);
    })
  }

  getBarChart(productData: Array<any>) {
    let products = Array.from(productData, x => `${ x._id.patternCode }/${ x._id.colorCode }/${ x._id.varietyCode }`);
    let totalAmounts = Array.from(productData, x => x.totalAmount);

    let data = {
      labels: products,
      datasets: [{
        label: 'Top 10 Ürünler',
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

    return this.getChart(this.productCanvas.nativeElement, "bar", data);
  }

  getChart(context, chartType, data) {
    return new Chart.Bar(context, {
      type: chartType,
      data: data
    })
  }

  getProductReport(minDate = "0-1-1", maxDate = "9999-12-30") {
    return this.rds.getProductReport(minDate, maxDate);
  }

  refreshChart(
    minDateParts = { day: 1, month: 1, year: 0 },
    maxDateParts = { day: 30, month: 12, year: 9999 }
  ) {
    let loading = this.loadingCtrl.create({ content: "Rapor yükleniyor..." });

    loading.present();

    this.getProductReport(
      `${minDateParts.year}/${minDateParts.month}/${minDateParts.day}`,
      `${maxDateParts.year}/${maxDateParts.month}/${maxDateParts.day}`
    ).subscribe(response => {
      this.products = response.json();

      this.productChart.data.labels = Array.from(this.products, x => x['_id']);
      this.productChart.data.datasets[0].data = Array.from(this.products, x => x['totalAmount']);
      this.productChart.update();

      loading.dismiss();
    })
  }

}
