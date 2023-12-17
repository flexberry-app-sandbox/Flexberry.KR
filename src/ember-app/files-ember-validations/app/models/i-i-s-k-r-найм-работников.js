import {
  defineNamespace,
  defineProjections,
  Model as НаймРаботниковMixin
} from '../mixins/regenerated/models/i-i-s-k-r-найм-работников';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НаймРаботниковMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
