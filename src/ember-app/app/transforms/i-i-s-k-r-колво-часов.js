import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КолвоЧасовEnum from '../enums/i-i-s-k-r-колво-часов';

export default FlexberryEnum.extend({
  enum: КолвоЧасовEnum,
  sourceType: 'IIS.KR.КолвоЧасов'
});
