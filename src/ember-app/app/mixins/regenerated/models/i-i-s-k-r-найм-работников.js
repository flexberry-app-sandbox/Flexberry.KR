import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDработника: DS.attr('number'),
  датаНайма: DS.attr('date'),
  договор: DS.attr('i-i-s-k-r-вид-договора'),
  имя: DS.attr('string'),
  образование: DS.attr('i-i-s-k-r-вид-образование'),
  опытРаботы: DS.attr('i-i-s-k-r-опыт'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string'),
  вакансии: DS.belongsTo('i-i-s-k-r-вакансии', { inverse: null, async: false })
});

export let ValidationRules = {
  iDработника: {
    descriptionKey: 'models.i-i-s-k-r-найм-работников.validations.iDработника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаНайма: {
    descriptionKey: 'models.i-i-s-k-r-найм-работников.validations.датаНайма.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-k-r-найм-работников.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-k-r-найм-работников.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  образование: {
    descriptionKey: 'models.i-i-s-k-r-найм-работников.validations.образование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  опытРаботы: {
    descriptionKey: 'models.i-i-s-k-r-найм-работников.validations.опытРаботы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-k-r-найм-работников.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-k-r-найм-работников.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  вакансии: {
    descriptionKey: 'models.i-i-s-k-r-найм-работников.validations.вакансии.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НаймРаботниковE', 'i-i-s-k-r-найм-работников', {
    датаНайма: attr('Дата найма', { index: 0 }),
    iDработника: attr('I dработника', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    имя: attr('Имя', { index: 3 }),
    отчество: attr('Отчество', { index: 4 }),
    образование: attr('Образование', { index: 5 }),
    опытРаботы: attr('Опыт работы', { index: 6 }),
    договор: attr('Договор', { index: 7 }),
    вакансии: belongsTo('i-i-s-k-r-вакансии', 'Вакансии', {
      наименование: attr('Наименование', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('НаймРаботниковL', 'i-i-s-k-r-найм-работников', {
    датаНайма: attr('Дата найма', { index: 0 }),
    iDработника: attr('I dработника', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    имя: attr('Имя', { index: 3 }),
    отчество: attr('Отчество', { index: 4 }),
    образование: attr('Образование', { index: 5 }),
    опытРаботы: attr('Опыт работы', { index: 6 }),
    договор: attr('Договор', { index: 7 }),
    вакансии: belongsTo('i-i-s-k-r-вакансии', 'Наименование', {
      наименование: attr('Наименование', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
