import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСоздания: DS.attr('date', { defaultValue() { return new Date(); } }),
  сотрудники: DS.belongsTo('i-i-s-k-r-сотрудники', { inverse: null, async: false }),
  график: DS.hasMany('i-i-s-k-r-график', { inverse: 'графикРаботы', async: false })
});

export let ValidationRules = {
  датаСоздания: {
    descriptionKey: 'models.i-i-s-k-r-график-работы.validations.датаСоздания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-k-r-график-работы.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  график: {
    descriptionKey: 'models.i-i-s-k-r-график-работы.validations.график.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикРаботыE', 'i-i-s-k-r-график-работы', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    сотрудники: belongsTo('i-i-s-k-r-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true }),
      должность: attr('Должность', { index: 3 })
    }, { index: 1, displayMemberPath: 'фИО' }),
    график: hasMany('i-i-s-k-r-график', 'График', {
      дата: attr('Дата', { index: 0 }),
      сотрудники: belongsTo('i-i-s-k-r-сотрудники', 'Сотрудники', {
        фИО: attr('ФИО', { index: 2, hidden: true }),
        должность: attr('Должность', { index: 3 })
      }, { index: 1, displayMemberPath: 'фИО' }),
      видДеятельности: attr('Вид деятельности', { index: 4 }),
      часы: attr('Часы', { index: 5 })
    })
  });

  modelClass.defineProjection('ГрафикРаботыL', 'i-i-s-k-r-график-работы', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    сотрудники: belongsTo('i-i-s-k-r-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
