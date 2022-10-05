import React, { useContext } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Pages from "../context/Pages";
import TotalPage from "../context/TotalPage";

const Page = () => {
  const { numPages } = useContext(TotalPage);
  const { pageNumber, setPageNumber } = useContext(Pages);
  let tols = [];
  for (let i = 1; i <= numPages; i++) {
    tols.push(i);
  }
  const currentPage = (value) => {
    setPageNumber(value);
  };
  return (
    <HStack>
      <Text>Page :</Text>
      <Text>
        {pageNumber}/{numPages}
      </Text>
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {pageNumber}
          </MenuButton>
          <MenuList>
            {tols.map((tol, index) => {
              return (
                <MenuItem
                  key={index}
                  value={tol}
                  onClick={() => {
                    currentPage(tol);
                  }}
                >
                  {tol}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default Page;
