export const tryLoginUser = (username,password) => {
  return fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Permission denied');
    }
  }).then((json) => {
        return json;
      },
      (err) => {
        return {error:err.message};
      }
  ).catch((err) => {
    return {error:err.message};
  })
}

