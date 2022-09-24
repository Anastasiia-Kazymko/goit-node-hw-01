const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      break;
    case "get":
      const oneContacts = await contacts.getContactById(id);
      break;
    case "add":
      const newContacts = await contacts.addContact({ name, email, phone });
      break;
    case "update":
      const updateContacts = await contacts.updateContactById(id, {
        name,
        email,
        phone,
      });
      break;
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      break;
    default:
      console.log("Unknow action");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
