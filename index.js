const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  const foundElement = array.find(element => element.result === "W")
  return foundElement ? foundElement.year : foundElement
}