import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НаймРаботниковMixin
} from '../mixins/regenerated/models/i-i-s-k-r-найм-работников';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НаймРаботниковMixin, Validations, {
});

defineProjections(Model);

export default Model;
