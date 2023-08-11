const { Command } = require("commander");
const program = new Command();

const {
  listContacts,
  getContactById,
  removeContact,
  //   addContact,
} = require("./contacts");

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
      console.log(`User with ID: ${id} has been removed from the list.`);
      break;

    // case "add":
    //   // ... name email phone
    //   break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
