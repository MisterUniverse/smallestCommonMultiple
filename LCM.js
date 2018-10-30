function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let mod = max;
  for (let i = max; i >= min; i--) {
    if(mod % i !== 0) {
      mod += max;
      i = max;
    }
  }
  return mod;
}


smallestCommons([1,5]);
