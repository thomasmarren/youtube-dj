var slider = 50
function fadeFn() {
  if (slider <= 100) {
    console.log(slider)
    slider += 10
  } else {
    console.log('done')
  }
}

fade = setInterval(fadeFn, 1000)
