import {
  defineNamespace,
  defineProjections,
  Model as ГрафикРаботыMixin
} from '../mixins/regenerated/models/i-i-s-k-r-график-работы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГрафикРаботыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
