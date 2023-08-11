import { promises as fs } from "fs";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.format({
  dir: "db",
  base: "contacts.json",
});

export async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);

    return contacts;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const foundId = contacts.find((contact) => contact.id === contactId);

    return foundId;
  } catch (err) {
    console.log(err.message);
  }
}

export async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const filteredList = contacts.filter((contact) => contact.id !== contactId);

    await fs.writeFile(contactsPath, JSON.stringify(filteredList));
  } catch (err) {
    console.log(err.message);
  }
}

export async function addContact(name, email, phone) {
  const newContact = { id: nanoid(), name, email, phone };

  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return contacts;
  } catch (err) {
    console.log(err.message);
  }
}
