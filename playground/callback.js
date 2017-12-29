// Simple callback use case
var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'John Doe'
    };

    // Simulate Server latency
    setTimeout(() => {
        callback(user);
    }, 500);
};

// Imagine we are fetching a user from an API and want to do some stuff with the user returned
getUser(42, (user) => {
    console.log(user);
});
