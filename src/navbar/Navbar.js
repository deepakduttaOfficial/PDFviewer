import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, MinusIcon, SmallAddIcon } from "@chakra-ui/icons";
import Hamburger from "hamburger-react";
import { useContext, useState } from "react";
import PdfWidth from "../context/PdfWidth";
import Sizebar from "./Sizebar";
import Page from "./Page";

const NewButton = ({ name, onClick }) => {
  return (
    <Button
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode(PdfWidth);
  const bgColorNav = useColorModeValue("gray.300", "gray.900");
  let { pdfWidth, setPdfWidth } = useContext(PdfWidth);
  return (
    <Box bg={bgColorNav} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        <Stack spacing={5} direction="row">
          <HStack>
            <NewButton
              name={<MinusIcon />}
              onClick={() => {
                if (pdfWidth < 450) {
                  alert("This is min size");
                } else {
                  setPdfWidth((pdfWidth -= 50));
                }
              }}
            />
            <Box mx={5}>{pdfWidth}</Box>
            <NewButton
              name={<SmallAddIcon />}
              onClick={() => {
                if (pdfWidth > 3000) {
                  alert("This is Max size");
                } else {
                  setPdfWidth((pdfWidth += 50));
                }
              }}
            />
          </HStack>
          <Page />
        </Stack>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Sizebar />
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
