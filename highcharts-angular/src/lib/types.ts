import type Highcharts from 'highcharts';
import type HighchartsESM from 'highcharts/es-modules/masters/highcharts.src';

export type ChartConstructorType = 'chart' | 'ganttChart' | 'stockChart' | 'mapChart';

export type ModuleFactory = (highcharts: Chart['highcharts']) => void;

export interface Chart {
  options: Highcharts.Options | HighchartsESM.Options,
  update?: boolean,
  highcharts?: typeof Highcharts | typeof HighchartsESM
  constructorChart?: Function;
}

export interface PartialHighchartsConfig {
  modules?: ModuleFactory[];
}

export interface HighchartsConfig {
  instance?: Promise<Chart['highcharts']>;
  options?: Chart['options'];
  modules?: ModuleFactory[];
}
