var x = 15;

if(x > 12) {
    console.log(x);
}

else {
    console.log('yo too small');
}

// intialize
// condition
// post loop action

for(var i = 0; i < x; i++) {

    if(i % 2 === 0) {
        console.log(i);
    }
    else {
        sayHello();
    }
}

function sayHello() {
    console.log('hi');
}
// eslint-disable-next-line
function evenOrOdd() {
    var input = document.getElementById('number');


    var y = input.value;
    if(y % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}