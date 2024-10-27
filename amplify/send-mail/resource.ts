import { defineFunction } from "@aws-amplify/backend";

export const sendEmail = defineFunction({
  name: "send-email",
  entry: "./handler.ts",
});
