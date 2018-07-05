const getUserByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({name})
    }, 300);
  })
};

const getUsers = async () => {
  
  const user = await getUserByName('Vit');
  
  console.log(user);
 
};

getUsers();