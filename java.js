//alert("hi");
var emptyArray = [];
for (var number = 0; number <= 2; number++){
    var count = +prompt("please enter your'r number");
    emptyArray[number] = count;
}
console.log(emptyArray);

for(var num = 0; num <  emptyArray.length; num++){
    if(emptyArray[num] % 2 !== 0){
          console.log(emptyArray[num]);
    }
}