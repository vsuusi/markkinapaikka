/* eslint-disable camelcase */
export const getItems = async () => {
  const response = await fetch('http://localhost:3000/api/items', {
    method: 'GET',
  });
  return response.json();
};

export const addItem = async ({
  user_id, title, description, price, location, image_url, token,
}) => {
  console.log(title, description, price, location, image_url, user_id, token);
  const response = await fetch('http://localhost:3000/api/items', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      user_id,
      title,
      description,
      price,
      location,
      image_url,
    }),
  });
  return response.json();
};
