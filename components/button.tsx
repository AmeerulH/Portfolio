type TButtonProps = {
  icon: React.ReactNode;
  link: string;
  text: string;
};

const Button = ({ icon, link, text }: TButtonProps) => {
  return (
    <a
      className="bg-[#5F8D4E] hover:bg-[#7fb86a] text-neutral-800 font-bold py-2 px-4 rounded inline-flex items-center"
      href={link}
      target="_blank"
    >
      {icon}
      <p className="pl-2">{text}</p>
    </a>
  );
};

export default Button;
