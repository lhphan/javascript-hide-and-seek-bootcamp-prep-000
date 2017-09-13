function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var theElement = document.getElementsByClassName('ranked-list')
}

function deepestChild(){
  return document.getElementById('grand-node').lastChild
}
