const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );
  return Promise.resolve(allUsers);
};

const loggerTable = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(loggerTable);
toggleUserState(users, "Lux").then(loggerTable);
