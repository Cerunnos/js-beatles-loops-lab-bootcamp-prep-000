function theBeatlesPlay(musicians,instruments){
  var emptyArray=[]
  for (var i=0; i < musicians.length; i++){
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}
function johnLennonFacts(facts){
  var array=[]
  let i=0
  while (i<facts.length){
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}
function iLoveTheBeatles(number){
  var array2=[]
  do{
    array2.push("I love the Beatles")
  }while (array2.length<number)
  return array2
}
