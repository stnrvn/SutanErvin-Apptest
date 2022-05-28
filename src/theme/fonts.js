import Metrics from './metrics'

const Size = {
  font6: Metrics.screenWidth * (6 / 365),
  font8: Metrics.screenWidth * (8 / 365),
  font10: Metrics.screenWidth * (10 / 365),
  font12: Metrics.screenWidth * (12 / 365),
  font14: Metrics.screenWidth * (14 / 365),
  font16: Metrics.screenWidth * (16 / 365),
  font18: Metrics.screenWidth * (18 / 365),
  font20: Metrics.screenWidth * (20 / 365)
}

const Weight = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal'
}

const Type ={ 

}

export default {
  Size,
  Weight,
  Type
}