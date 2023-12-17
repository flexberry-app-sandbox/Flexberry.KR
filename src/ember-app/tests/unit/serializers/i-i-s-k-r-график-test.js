import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-r-график', 'Unit | Serializer | i-i-s-k-r-график', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-k-r-график',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-k-r-вид-договора',
    'transform:i-i-s-k-r-вид-образование',
    'transform:i-i-s-k-r-деятельность',
    'transform:i-i-s-k-r-колво-часов',
    'transform:i-i-s-k-r-опыт',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
