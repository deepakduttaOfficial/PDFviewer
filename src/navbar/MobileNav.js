import React, { useRef, useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  LinkBox,
  Link,
  Text,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdf from "../JavascriptProject.pdf";
import { Box } from "@chakra-ui/react";
import TotalPage from "../context/TotalPage";
import Pages from "../context/Pages";
import PageDel from "./PageDel";

const MobileNav = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 48em)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  // PDF
  const { numPages, setNumPages } = useContext(TotalPage);
  const { setPageNumber } = useContext(Pages);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  let pageArr = [];
  for (let i = 1; i <= numPages; i++) {
    pageArr.push(i);
  }
  const isClick = (value) => {
    setPageNumber(value);
  };

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your PDF file</DrawerHeader>

          <DrawerBody>
            <Stack alignItems={"center"} my={5}>
              {!isLargerThan1280 && <PageDel />}
            </Stack>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              {pageArr.map((index) => {
                return (
                  <LinkBox
                    as={Link}
                    rounded={"md"}
                    key={index}
                    onClick={() => {
                      isClick(index);
                    }}
                  >
                    <Box boxShadow="dark-lg" mt={3} onClick={onClose}>
                      <Page height={1000} width={250} pageNumber={index} />
                      <Text textAlign={"center"} p={3}>
                        Page{index}
                      </Text>
                    </Box>
                  </LinkBox>
                );
              })}
            </Document>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
