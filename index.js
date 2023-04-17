// Your code here
const giveMessageToMrsPotato = require("./send-messages/give-message-to-mrs-potato.js")
const sayHelloTo = require("./send-messages/say-hello-to.js")
const { msg1, msg2, msg3 } = require("./messages/index.js")

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);