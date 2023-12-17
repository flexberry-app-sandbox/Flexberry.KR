import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ДеятельностьEnum from '../enums/i-i-s-k-r-деятельность';

export default FlexberryEnum.extend({
  enum: ДеятельностьEnum,
  sourceType: 'IIS.KR.Деятельность'
});
