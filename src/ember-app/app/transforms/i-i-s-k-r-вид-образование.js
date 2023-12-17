import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидОбразованиеEnum from '../enums/i-i-s-k-r-вид-образование';

export default FlexberryEnum.extend({
  enum: ВидОбразованиеEnum,
  sourceType: 'IIS.KR.ВидОбразование'
});
