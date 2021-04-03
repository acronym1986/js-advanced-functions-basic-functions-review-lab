// test 1 2 3
 function saturdayFun (activity = 'roller-skate'){
     return `This Saturday, I want to ${activity}!`
}


 // test 4 5 6
const mondayWork = function (activity2 = 'go to the office') {
      return `This Monday, I will ${activity2}.`
}

//test  7 8 9
const wrapAdjective = function ( dot = '*') {

       return function(adj = ' a hard worker ') {
           
       return `You are ${dot}${adj}${dot}!`
       }
}

// test 10 11 12 13 14
const Calculator = {
      add : function (a, b){
          return a + b
     },
      
 subtract : function (a, b) {
          return a - b
     },

 multiply : function (a, b) {
          return a * b
 },

   divide : function (a, b) {
          return a / b
   }
}
  
//test 15
function actionApplyer(num, arr) {
    let num2 = num;
       for (let i=0; i<arr.length; i++){
            num2 = arr[i](num2)  
          }
        return num2;
}