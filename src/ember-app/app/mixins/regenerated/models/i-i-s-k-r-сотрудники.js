import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDномер: DS.attr('number'),
  должность: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  iDномер: {
    descriptionKey: 'models.i-i-s-k-r-сотрудники.validations.iDномер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-k-r-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-k-r-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-k-r-сотрудники', {
    iDномер: attr('I dномер', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    должность: attr('Должность', { index: 2 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-k-r-сотрудники', {
    iDномер: attr('I dномер', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    должность: attr('Должность', { index: 2 })
  });
};
