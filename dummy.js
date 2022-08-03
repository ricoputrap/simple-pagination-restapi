const populateUsers = (total) => {
  const users = [];

  for (let i = 0; i < total; i++) {
    const id = i + 1;

    users.push({
      id,
      name: `User ${id}`
    });
  }

  return users;
}

export const users = populateUsers(100);