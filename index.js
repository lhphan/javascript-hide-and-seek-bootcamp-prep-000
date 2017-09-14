function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var theElements = document.querySelectorAll('.ranked-list li')
  for(var i = 0; i < theElements.length; i++){
    theElements[i].textContent = parseInt(theElements[i].textContent) + n
  }
}

function deepestChild(){
  var parent = document.getElementById('grand-node')
  var child = parent.children[0]
  while(child){
    parent = child
    child = child.children[0]
  }
  return parent
}
