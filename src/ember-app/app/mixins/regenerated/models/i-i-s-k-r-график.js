import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видДеятельности: DS.attr('i-i-s-k-r-деятельность'),
  дата: DS.attr('date'),
  часы: DS.attr('i-i-s-k-r-колво-часов'),
  сотрудники: DS.belongsTo('i-i-s-k-r-сотрудники', { inverse: null, async: false }),
  графикРаботы: DS.belongsTo('i-i-s-k-r-график-работы', { inverse: 'график', async: false })
});

export let ValidationRules = {
  видДеятельности: {
    descriptionKey: 'models.i-i-s-k-r-график.validations.видДеятельности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-k-r-график.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  часы: {
    descriptionKey: 'models.i-i-s-k-r-график.validations.часы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-k-r-график.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  графикРаботы: {
    descriptionKey: 'models.i-i-s-k-r-график.validations.графикРаботы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикE', 'i-i-s-k-r-график', {
    дата: attr('Дата', { index: 0 }),
    сотрудники: belongsTo('i-i-s-k-r-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true }),
      должность: attr('Должность', { index: 3 })
    }, { index: 1, displayMemberPath: 'фИО' }),
    видДеятельности: attr('Вид деятельности', { index: 4 }),
    часы: attr('Часы', { index: 5 })
  });
};
