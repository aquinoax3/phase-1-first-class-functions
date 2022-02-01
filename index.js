function receivesAFunction (functionCallBack) {
    return functionCallBack();

}


function returnsANamedFunction() {
    const sum = (a,b) => a+b;
    return sum; 
}

function returnsAnAnonymousFunction() {
    return (function(){

    });
}