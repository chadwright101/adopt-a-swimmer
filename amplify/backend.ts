import { defineBackend } from "@aws-amplify/backend";
import { sendEmail } from "./send-mail/resource";

defineBackend({
  sendEmail,
});
