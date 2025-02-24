import { IButton } from "./interface";

export const Button = ({ title }: IButton) => {
  return (
    <a
      href="#"
      className="btn btn-lg btn-navy text-white !bg-[#000] border-[#000] hover:text-white  hover:border-[#000] focus:shadow-[rgba(0,0,0,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52]"
      style={{
        background: "#000",
      }}
    >
      {title}
    </a>
  );
};
