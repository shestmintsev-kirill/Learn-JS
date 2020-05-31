const numArr = [10, 7, 44, 32];//! 7 будет в конце, т.к. 7 в лексическом значении больше других, для правильной сортировки: ->// 
numArr.sort((prev, next) => prev - next);
console.log(numArr)