import { Serializer as НаймРаботниковSerializer } from
  '../mixins/regenerated/serializers/i-i-s-k-r-найм-работников';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НаймРаботниковSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
