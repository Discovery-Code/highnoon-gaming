import db from "../../lib/connectDB";
import { Contact } from "../../models/contact-us.model";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ error: "Bad Request" });
  }

  const { firstname, lastname, email, content } = req.body;

  if (
    firstname == "" ||
    lastname == "" ||
    !email.includes("@") ||
    content == ""
  ) {
    return res.status(406).json({ error: "Invalid Input" });
  }

  db();
  const newContact = new Contact(req.body);
  await newContact.save();

  res.status(201).json({ message: "Message Sent" });
}
