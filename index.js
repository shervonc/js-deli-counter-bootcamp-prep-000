var katzDeliLine = []
 var Tnumber = 0

function takeANumber(katzDeliLine,ticketNumber) {
  
  Tnumber = Tnumber + 1
  
  return `You are ticketNumber ${Tnumber}`

}
  
  
//function takeANumber(katzDeliLine, name) {
 // katzDeliLine.push(`${name}`);
 // return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
//}


function nowServing(katzDeliLine) {
  
    if(katzDeliLine.length === 0) {
      return (`There is nobody waiting to be served!`);
      }
      else
      return(`Currently serving ${katzDeliLine.shift()}.`);
    }

  function currentLine(katzDeliLine){
    if(katzDeliLine.length===0) {
        return "The line is currently empty.";
    }
     var CNumber = [];
        for( var c =0; c < katzDeliLine.length; c++) {
            CNumber.push(c + 1 + ". " + katzDeliLine[c])
        }
     return "The line is currently: " + CNumber.join(", ")
}
