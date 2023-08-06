import clsx from "clsx";
import Link from "next/link";

type TButtonProps = {
  icon?: React.ReactNode;
  link: string;
  text: string;
};

const Button = ({ icon, link, text }: TButtonProps) => {
  return (
    <Link
      className="bg-gradient-to-r from-[#5F8D4E] to-[#7be056] text-neutral-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center max-sm:w-[10rem] sm:mr-[0.5rem] shadow-lg z-10"
      href={link}
      target="_blank"
    >
      {icon}
      <p className={clsx({ "pl-2": !!icon })}>{text}</p>
    </Link>
  );
};

export default Button;
