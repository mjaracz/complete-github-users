export const fetchUsers = async () => {
  return fetch('https://api.github.com/users', {
    method: 'GET',
    redirect: 'follow',
  })
    .then((res) => res.json())
    .then((data) => data);
};
