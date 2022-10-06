import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import PdfWidth from "../context/PdfWidth";
import Sizebar from "./Sizebar";
import MobileNav from "./MobileNav";
import PageDel from "./PageDel";

const Navbar = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 48em)");
  const { colorMode, toggleColorMode } = useColorMode(PdfWidth);
  const bgColorNav = useColorModeValue("gray.300", "gray.900");
  return (
    <Box bg={bgColorNav} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <MobileNav />
        {isLargerThan1280 && <PageDel />}

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
