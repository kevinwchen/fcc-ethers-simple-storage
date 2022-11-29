// // Setup Movie Night

// Cook popcorn
// Pour Drinks
// Start Movie

// Synchronous
// 1. Put popcorn in microwave -> Promise
// 2. Wait for popcorn to finish
// 3. Pour drinks for everyone

// Asynchronous
// 1. Put popcorn in microwave
// 2. Pour drinks for everyone
// 3. Wait for popcorn to finish

// Promise
// Pending
// Fulfilled
// Rejected


function setupMovieNight() {
  await cookPopcorn()
  await pourDrinks()
}

function cookPopcorn() {
  // some code
  return Promise(/* code */)
}