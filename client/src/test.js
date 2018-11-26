function processData(input) {
    //Enter your code here
    var _input=input.split("\n");
    var d=_input[0].split(" ").map(Number);
    var actual=_input[1].split(" ").map(Number);
    var spliced=actual.splice(0,d[1]);
    for(i=0;i<spliced.length;i++){
        actual[d[0]-spliced.length+i]=spliced[i];
    }
    console.log(actual.join(" "));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});