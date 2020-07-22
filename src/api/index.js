const URL = "https://yalantis-react-school-api.yalantis.com/api/task0/users";

const fetchUsers = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchUsers };
