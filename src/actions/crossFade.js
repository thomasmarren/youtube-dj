export default function crossFade(sliderStr, decks){

  var slider = parseInt(sliderStr)
  var type
  var ratio

  if(slider > 50){
    type = `CROSS_FADE_DECK_1`
    let adjustedSlider = 100 - slider
    ratio = adjustedSlider
  } else if (slider < 50){
    type = `CROSS_FADE_DECK_2`
    ratio = slider
  } else {
    type = `RESET_CROSS_FADE`
  }

  return {
    type: type,
    payload: {ratio: ratio, slider: slider}
  }
}
