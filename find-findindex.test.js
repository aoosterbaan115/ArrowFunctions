
// findUserByUsername
function findUserByUsername(arr, username){
  return arr.find(function(user){
    return user.username === username;
  });
}


// removeUser
function removeUser(arr, username){
  const index = arr.findIndex(function(user){
    return user.username === username;
  });

  if(index === -1) return undefined;

  return arr.splice(index, 1)[0];
}
