import React, { useContext } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import PdfWidth from "../context/PdfWidth";

const Sizebar = () => {
  const sizes = [];
  const { pdfWidth, setPdfWidth } = useContext(PdfWidth);

  let num = 200;
  for (let i = 50; i < 110; i++) {
    sizes.push((num += 50));
  }

  const setWidth = (value) => {
    setPdfWidth(value);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {pdfWidth}
      </MenuButton>
      <MenuList>
        {sizes.map((size, index) => {
          return (
            <MenuItem
              key={index}
              value={size}
              onClick={() => {
                setWidth(size);
              }}
            >
              {size}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default Sizebar;
