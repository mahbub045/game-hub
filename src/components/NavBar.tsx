import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" />
      </Link>

      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
