import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Send } from "lucide-react";
import { send } from "@emailjs/browser";
import toast from "react-hot-toast";

function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsSending] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please Fill All Required Forms!");
      return;
    }
    handleReset();
    setIsSending(true);

    try {
      await send(
        "service_wnpnm29", // replace with your EmailJS service ID
        "template_p2wil41", // replace with your EmailJS template ID
        { name, email, message }, // template variables
        "P2ymhB9tnH88shhW8" // replace with your EmailJS public key
      );

      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  }

  function handleReset() {
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 rounded-xl border border-(--border-color) bg-(--custom-bg) shadow-lg h-fit"
    >
      <h2 className="text-3xl text-(--text-color) mb-6">
        <span>Send a </span>
        <span className="text-(--orange-text)">Message</span>
      </h2>

      <div className="space-y-6">
        <label
          htmlFor="name"
          className="block text-(--text-color-secondary) mb-2"
        >
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          autoComplete="username"
          placeholder="Your Name"
          disabled={isLoading}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          addedClasses="w-full"
        />

        <label
          htmlFor="email"
          className="block text-(--text-color-secondary) mb-2"
        >
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={email}
          placeholder="your.email@example.com"
          disabled={isLoading}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          addedClasses="w-full"
        />

        <label
          htmlFor="message"
          className="block text-(--text-color-secondary) mb-2"
        >
          Message
        </label>
        <Input
          type="textarea"
          id="message"
          name="message"
          value={message}
          placeholder="Your message here..."
          disabled={isLoading}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
          addedClasses="h-[170px] max-h-[200px] min-h-[170px] w-full"
        />

        <Button
          type="submit"
          variation="orange"
          addedClasses="px-6 py-3 w-full justify-center"
          disabled={isLoading}
        >
          <Send />
          Send Message
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
