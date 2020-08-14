const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(arr){
  const newarr=arr.find(s => s === "W");
  console.log(newarr);
  if(newarr===true){
    return newarr.year;
  }
  else{
    return undefined;
  }
}
