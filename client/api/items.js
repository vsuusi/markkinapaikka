export const getItems = async () => {
  const response = await fetch('http://localhost:3000/api/items', {
    method: 'GET',
  });
  return response.json();
};
