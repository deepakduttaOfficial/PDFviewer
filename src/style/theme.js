import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "gray.800")(props),
    },
  }),
};

const theme = extendTheme({ styles });

export default theme;
