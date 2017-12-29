// Basics on callback and Event loops
console.log('Starting...');

// Register the callback to be run in 1s 
setTimeout(() => console.log('Hey'), 1000);

// Register the callback to be run in 0s
// So why it's not running instantly ?
// Simply because we use the NodeJs API which put the callback into
// Callback queue and wait until the Program stack is empty.
setTimeout(() => console.log('Hey 2'), 0);

console.log('End');

// Returns 
// Starting...
// End
// Hey 2
// Hey
