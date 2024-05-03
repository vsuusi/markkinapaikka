export const getItems = async () => {
  const response = await fetch('http://localhost:3000/api/items', {
    method: 'GET',
  });
  return response.json();
};

export const addItem = async () => {
  const response = await fetch('http://localhost:3000/api/items', {
    method: 'POST',
    contenType: 'application/json',
  });
  return response.json();
};
