import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидДоговораEnum from '../enums/i-i-s-k-r-вид-договора';

export default FlexberryEnum.extend({
  enum: ВидДоговораEnum,
  sourceType: 'IIS.KR.ВидДоговора'
});
