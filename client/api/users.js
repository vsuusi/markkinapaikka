export const signUpUser = async ({
  email, name, password, phone,
}) => {
  console.log('api/users/signup: ', email, name, password, phone);
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/users/signup`,
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
        phone,
      }),
    },
  );
  return res.json();
};

export const loginUser = async ({ email, password }) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/users/login`,
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

export const getUserById = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`, {
    method: 'GET',
  });
  return response.json();
};
