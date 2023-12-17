import { Serializer as ГрафикSerializer } from
  '../mixins/regenerated/serializers/i-i-s-k-r-график';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГрафикSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
