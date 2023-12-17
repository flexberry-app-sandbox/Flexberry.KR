import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-r-сотрудники', 'Unit | Model | i-i-s-k-r-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-k-r-вакансии',
    'model:i-i-s-k-r-график-работы',
    'model:i-i-s-k-r-график',
    'model:i-i-s-k-r-найм-работников',
    'model:i-i-s-k-r-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
