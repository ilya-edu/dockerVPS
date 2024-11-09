module.exports = {
  // Other settings...

  adminAuth: {
    type: "credentials",
    users: [
      {
        username: "admin1",
        password: "$2a$08$MEaHJGGYENTtqoZM1fY3jenEx1i8S5ak7V28A0tZiVy4vFvFIbJ0m", // Replace with actual bcrypt hash
        permissions: "*",
      },
    ],
  },

  // Other settings...
};
