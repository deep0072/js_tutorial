// Promises allow errors to be passed down the chain 
// and handled in one common place without having to 
// put in layers of manual error
//  handling.like if condition met then furthur process will take place and if not then there will be error show




// here ia Promise object take 2 param resolve and reject
// resolve will give output on success and reject will output the error if condition not met


let p = new Promise((resolve,reject) =>{
    let a = 1+3
    if (a == 2){
        resolve('success')
    }else{
        reject("failed")
    }

})

// .then will only execute if resolve condtion  met. ".then"  
// just execute the upcoming process 
// here ".then() we can use both response or message as a parameter"
p.then((response)=>{
    console.log( 'this is in the' + response)



    // .catch executes if rejection occur
}).catch((message)=>{
    console.log("this is in the " + message)
})

// promises are used when processes are taking long time like downloading images from server
// if i want to do something in that period instead of wait
// d
