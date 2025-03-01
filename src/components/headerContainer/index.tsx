import { Header } from "../header";
import Navbar from "../navbar/Navbar";

export const HeaderContainer = ({ solid }: { solid?: boolean }) => {
  return <Header solid={solid} />;
};
