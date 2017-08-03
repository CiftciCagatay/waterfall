import { NgModule } from '@angular/core';
import { FormatDatePipe } from './../pipes/format-date/format-date';
import { CalculateBalancePipe } from './../pipes/calculate-balance/calculate-balance';
@NgModule({
	declarations: [FormatDatePipe,
    FormatDatePipe,
    CalculateBalancePipe],
	imports: [],
	exports: [FormatDatePipe,
    FormatDatePipe,
    CalculateBalancePipe]
})
export class PipesModule {}
