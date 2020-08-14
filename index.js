const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(arr){
  const newarr=arr.find(s => s.result === "W");
  console.log(newarr);
  if(newarr!==true){
    return newarr.year;
  }
  else{
    return undefined;
  }
}
