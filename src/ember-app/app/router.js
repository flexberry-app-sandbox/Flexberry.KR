import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-k-r-вакансии-l');
  this.route('i-i-s-k-r-вакансии-e',
  { path: 'i-i-s-k-r-вакансии-e/:id' });
  this.route('i-i-s-k-r-вакансии-e.new',
  { path: 'i-i-s-k-r-вакансии-e/new' });
  this.route('i-i-s-k-r-график-работы-l');
  this.route('i-i-s-k-r-график-работы-e',
  { path: 'i-i-s-k-r-график-работы-e/:id' });
  this.route('i-i-s-k-r-график-работы-e.new',
  { path: 'i-i-s-k-r-график-работы-e/new' });
  this.route('i-i-s-k-r-найм-работников-l');
  this.route('i-i-s-k-r-найм-работников-e',
  { path: 'i-i-s-k-r-найм-работников-e/:id' });
  this.route('i-i-s-k-r-найм-работников-e.new',
  { path: 'i-i-s-k-r-найм-работников-e/new' });
  this.route('i-i-s-k-r-сотрудники-l');
  this.route('i-i-s-k-r-сотрудники-e',
  { path: 'i-i-s-k-r-сотрудники-e/:id' });
  this.route('i-i-s-k-r-сотрудники-e.new',
  { path: 'i-i-s-k-r-сотрудники-e/new' });
});

export default Router;
