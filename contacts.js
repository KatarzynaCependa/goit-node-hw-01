const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  listContacts,
  //   getContactById,
  //   removeContact,
  //   addContact,
};

// function getContactById(contactId) {
//   // ...twój kod
// }

// function removeContact(contactId) {
//   // ...twój kod
// }

// function addContact(name, email, phone) {
//   // ...twój kod
// }
