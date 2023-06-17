import me from "../app/me.jpg";

export const name = "Ameerul Hady";
export const avatar = me;
export const title = () => {
  return <>Hey, my name is</>;
};
export const bigName = () => {
  return <>Ameerul Hady.</>;
};
export const job = () => {
  return <>I build and design websites.</>;
};
export const bio = () => {
  return (
    <>
      I'm a frontend developer that focuses on developing websites using React!
      I am currently building and maintaining the P2P code base at Deriv,
      ensuring its functionality, scalability, and user-friendliness to
      facilitate seamless P2P trading experiences.
    </>
  );
};
export const personal = () => {
  return (
    <>
      When I'm not coding, I'm either writing songs or playing with my cat. I
      also love to travel, play golf, football and especially watch anime
      (specifically One Piece)
    </>
  );
};
