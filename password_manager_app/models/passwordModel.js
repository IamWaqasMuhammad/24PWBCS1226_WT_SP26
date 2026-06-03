let passwords = [];
let nextId = 1;

module.exports = {
  getPasswords: () => passwords,

  getPasswordById: (id) => {
    return passwords.find((password) => password.id === parseInt(id));
  },

  addPassword: (passwordData) => {
    passwordData.id = nextId++;
    passwords.push(passwordData);
  },

  updatePasswordById: (id, updatedData) => {
    const index = passwords.findIndex(
      (password) => password.id === parseInt(id),
    );

    if (index !== -1) {
      passwords[index] = {
        id: parseInt(id),
        ...updatedData,
      };
    }
  },

  deletePasswordById: (id) => {
    passwords = passwords.filter((password) => password.id !== parseInt(id));
  },
};
