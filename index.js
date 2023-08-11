import { Command } from "commander";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactList = await listContacts(action);
      console.table(contactList);
      break;

    case "get":
      const contactById = await getContactById(id);
      console.log(contactById);
      break;

    case "remove":
      const updatedList = await removeContact(id);
      console.log(`Contact with ID: ${id} has been removed from the list.`);
      break;

    case "add":
      const newList = await addContact(name, email, phone);
      console.log(`New contact has been added to the list.`);
      console.table(newList);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
