function makeRequest(location){

    return new Promise(( resolve ,reject)=>{
        console.log(`making request to ${location}`)
        if (location == "Google"){
            resolve(' google is there')
        }else{
            reject("only google will be accept not" + " " + location)
        }

    })
}

// " here response is the just string or variable that is passed 
// as a param in resolved()


function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log("proccessing request...")
        resolve(`Extra informstion  + ${response}`)

    })
}


// d

// here makeRequest has Google param so thats why it called here
makeRequest('Google').then((response)=>{
    console.log(" hey connecting...")
    // here processRequest function is calling
    return processRequest(response)


    // here only processRequest function's resolved response will be generated
}).then(processedResponse=>{
    console.log(processedResponse)
}).catch(err=>{
    console.log(err)
})






// here in assync we use syntax "async function function name"
// we use await "function_name" to get the output if resolve condition are met
// to handle the reject output we will use try and catch function

// here .catch function is replaced by try and catch

async function doWork(){
    try{
        const response = await makeRequest('Google')
        console.log("response is received")
        const processedResponse = await processRequest(response)
        console.log(processedResponse)

    }catch(err){
        console.log(err)

    }

   
}
doWork()
