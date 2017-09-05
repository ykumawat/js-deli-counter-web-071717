function takeANumber(katzDeliline, name){
  katzDeliline.push(name)
  return(`Welcome, ${name}. You are number ${katzDeliline.length} in line.`);
};

function nowServing(katzDeliline) {
  if (katzDeliline.length > 0) {
    return `Currently serving ${katzDeliline.shift(1)}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(katzDeliline){
  if (katzDeliline.length === 0) {
    return "The line is currently empty."
  } else {
    let line = []
    for (let i = 0, n = katzDeliline.length; i < n; i++) {
      line.push(`${i+1}. ${katzDeliline[i]}`)
    }
    return `The line is currently: ${line.join(", ")}`
  }
}
