export const signUpUser = async ({ email, name, password }) => {
  console.log('api/users/signup: ', email, name, password);
  const res = await fetch(
    'http://localhost:3000/api/users/signup',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    },
  );
  return res.json();
};

export const loginUser = async ({ email, password }) => {
  const res = await fetch(
    'http://localhost:3000/api/users/login',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  );
  return res.json();
};
