function makeuppercase(value){
    console.log(value.toUpperCase())
}
function reverseString(value){
    console.log(value.split('').reverse().join(''))
}

function handleName(name,cb){
    const fullName = `${name} smith`;
    cb(fullName)
    //more logic
    
}
// handleName("peter",makeuppercase)
// handleName("sammy",reverseString)
handleName('susan', function(value){
    console.log(value)
})
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(){
    console.log("hello world");
})

// array methods, setTimeout, event listeners etc.

