import clsx from "clsx";
import Link from "next/link";

type TButtonProps = {
  icon?: React.ReactNode;
  full?: boolean;
  link: string;
  text: string;
  wide?: boolean;
};

const Button = ({
  icon,
  full = false,
  link,
  text,
  wide = false,
}: TButtonProps) => {
  return (
    <Link
      className={clsx(
        "bg-gradient-to-r from-[#5F8D4E] to-[#7be056] text-neutral-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center sm:mr-[0.5rem] shadow-lg z-10",
        { "max-sm:w-[100%]": full, "max-sm:w-[48%]": wide }
      )}
      href={link}
      target="_blank"
    >
      {icon}
      <p className={clsx({ "pl-2": !!icon })}>{text}</p>
    </Link>
  );
};

export default Button;
