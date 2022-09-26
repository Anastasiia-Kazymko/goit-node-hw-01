const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      console.table(await contacts.listContacts());
      break;
    case "get":
      console.log(await contacts.getContactById(id));
      break;
    case "add":
      await contacts.addContact({ name, email, phone });
      break;
    case "update":
      await contacts.updateContactById(id, {
        name,
        email,
        phone,
      });
      break;
    case "remove":
      await contacts.removeContact(id);
      break;
    default:
      console.warn("Unknow action");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
