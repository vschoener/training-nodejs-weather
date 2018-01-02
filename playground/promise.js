// Promise, a better way to work with event than callback
// Callback CONS:
//  - Nested calls 
//  - Can call multiple time the same callback (even by mistake)
//
// PROMISE PRO
//  - Avoid complex nested callbacks (could be hard to debug / understand)
//  - When promise is resolved or rejected, it's done
//  - We can easily chain promise (then({}).then({}).catch({}))
// PROMISE CONS
//  - if none of the resolve / reject callback is called, the Promise will hang
//  - We can only pass one parameter to the callback resolution, so we need to wraps into an object
//  - And of course we can't call both functions (makes sense right ?)

var somePromise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("Hey, it worked");
    // }, 1000);

    
    setTimeout(() => {
        reject("Damn, it failed");
    }, 1000);
    
});

somePromise.then((message) => {
    console.log(message);
}, (errorMessage) => {
    console.error(errorMessage);
});

// Chaining Promise and wrap the promise

var asyncFunction = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === 'string') {
                resolve({
                    data,
                    msg: "Yeah it works"
                });
            } else {
                reject("Oh no :( it should be a 'string'");
            }
        }, 1000);
    });
};

promise = asyncFunction(23).then((object) => {
    console.log(object.msg);
    return asyncFunction(12);
}).then((object) => {
    console.log(object.msg);
    return;
}).catch((error) => {
    console.log(error);
});
