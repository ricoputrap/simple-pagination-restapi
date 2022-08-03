const populateData = (total, label) => {
  const users = [];

  for (let i = 0; i < total; i++) {
    const id = i + 1;

    users.push({
      id,
      name: `${label} ${id}`
    });
  }

  return users;
}

export const users = populateData(100, "User");
export const posts = populateData(100, "Post");