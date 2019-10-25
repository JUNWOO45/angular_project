function log(msg) {
    console.log('msg : ', msg);
}
var message = 'Hello world';
log(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally : ', i);
}
doSomething();
