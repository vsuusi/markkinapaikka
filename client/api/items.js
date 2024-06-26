/* eslint-disable camelcase */
export const getItems = async () => {
  const response = await fetch('/api/items', {
    method: 'GET',
  });
  return response.json();
};

export const addItem = async ({
  user_id, title, description, price, location, image_url, token,
}) => {
  const response = await fetch('/api/items', {
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

export const deleteItem = async ({ id, token }) => {
  const response = await fetch(`/api/items/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
