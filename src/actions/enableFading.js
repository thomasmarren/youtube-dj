export default function enableFading(bool){
  console.log("setting enableFading to " + bool.toString())
  return {
    type: 'ENABLE_FADING',
    payload: bool
  }
}
