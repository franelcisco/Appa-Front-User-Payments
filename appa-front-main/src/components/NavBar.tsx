import { useBCVTasaStore } from "@/store/bcv";
import { currencyFormat } from "@/utils/helpers";
import {
  Navbar as NavBarFlowBite,
  NavbarBrand,
  ThemeProvider,
  createTheme,
} from "flowbite-react";
// import BoneAppetitLogo from "@/assets/logo";
import logo from "@/assets/logo.png";

const theme = createTheme({
  navbar: {
    root: {
      base: "bg-bone-beige px-2 py-2.5 sm:px-4",
    },
  },
});

export const NavBar = () => {
  const { tasa } = useBCVTasaStore();
  return (
    <ThemeProvider theme={theme}>
      <NavBarFlowBite fluid rounded>
        <NavbarBrand href="/">
          {/* <BoneAppetitLogo /> */}
          <img src={logo} className="" />
        </NavbarBrand>
        <div className="flex flex-col justify-center items-center p-2 bg-appa-blue text-xs font-bold rounded-lg">
          <p className="uppercase">tasa bcv del dia:</p>
          <p>{currencyFormat.format(tasa.amount) ?? 0}</p>
        </div>
      </NavBarFlowBite>
    </ThemeProvider>
  );
};
