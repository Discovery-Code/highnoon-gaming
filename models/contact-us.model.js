import { model, models, Schema } from "mongoose";

const ContactSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  content: String,
  createdAt: {
    type: String,
    default: () => Date.now(),
  },
});

function capitalize(name) {
  const lowerCaseName = name.trim().toLowerCase();
  const camelCaseName =
    lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
  return camelCaseName;
}

ContactSchema.pre("save", async function () {
  const contactInfo = this;
  contactInfo.firstname = capitalize(this.firstname);
  contactInfo.lastname = capitalize(this.lastname);
  contactInfo.email = this.email.toLowerCase();
});

export const Contact = models.Contact || model("Contact", ContactSchema);
