export default function removeFromQueue(newQueue){
  return {
    type: `REMOVE_FROM_QUEUE`,
    payload: newQueue
  }
}
