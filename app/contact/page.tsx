import type { Metadata } from "next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "components/button";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Contact Me</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8 sm:w-[75%]">
        Thank you for visiting my portfolio! While I'm currently not seeking new
        opportunities, I'm always open to connecting and engaging with fellow
        professionals. Feel free to reach out to me with any questions, ideas,
        or simply to say hi. I'm here to help and eager to connect!
      </p>
      <div className="flex flex-col sm:flex-row mt-[1rem] space-x-0 ">
        <div className="flex flex-row max-sm:justify-between">
          <Button
            icon={<FaGithub />}
            link="https://github.com/AmeerulH"
            text="Github"
            wide
          />
          <Button
            icon={<FaLinkedin />}
            link="https://www.linkedin.com/in/ameerul-h/"
            text="LinkedIn"
            wide
          />
        </div>
        <div className="max-sm:pt-[0.5rem]">
          <Button
            icon={<MdEmail />}
            link="mailto:ameerulzhbusiness@gmail.com"
            text="Email Me"
            full
          />
        </div>
      </div>
    </section>
  );
}
