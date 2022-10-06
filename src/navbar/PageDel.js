import { useContext } from "react";
import {
  Box,
  Button,
  useColorModeValue,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { MinusIcon, SmallAddIcon } from "@chakra-ui/icons";
import PdfWidth from "../context/PdfWidth";
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
const PageDel = () => {
  let { pdfWidth, setPdfWidth } = useContext(PdfWidth);
  return (
    <div>
      <Stack spacing={5} direction={{ base: "column", md: "row" }}>
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
    </div>
  );
};

export default PageDel;
