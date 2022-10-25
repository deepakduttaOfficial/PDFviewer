import { useContext } from "react";
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import GetPdf from "./context/GetPdf";
import TotalPage from "./context/TotalPage";
import Pages from "./context/Pages";

const first = {
  rest: {
    rotate: "-15deg",
    scale: 0.95,
    x: "-50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: "-70%",
    scale: 1.1,
    rotate: "-20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const second = {
  rest: {
    rotate: "15deg",
    scale: 0.95,
    x: "50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: "70%",
    scale: 1.1,
    rotate: "20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const third = {
  rest: {
    scale: 1.1,
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.3,
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const PreviewImage = (props, ref) => {
  return (
    <Box
      bg="white"
      top="0"
      height="100%"
      width="100%"
      position="absolute"
      borderWidth="1px"
      borderStyle="solid"
      rounded="sm"
      borderColor="gray.400"
      as={motion.div}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
      {...props}
      ref={ref}
    />
  );
};

const GetPDF = () => {
  const controls = useAnimation();
  const startAnimation = () => controls.start("hover");
  const stopAnimation = () => controls.stop();
  const { setValue } = useContext(GetPdf);
  const { setPageNumber } = useContext(Pages);
  const changeHandler = (event) => {
    setValue(event.target.files[0]);
    setPageNumber(1);
  };
  return (
    <Container my="12">
      <AspectRatio width="64" ratio={1}>
        <Box
          borderColor="gray.300"
          borderStyle="dashed"
          borderWidth="2px"
          rounded="md"
          shadow="sm"
          role="group"
          transition="all 150ms ease-in-out"
          _hover={{
            shadow: "md",
          }}
          as={motion.div}
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <Box position="relative" height="100%" width="100%">
            <Box
              position="absolute"
              top="0"
              left="0"
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
            >
              <Stack
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justify="center"
                spacing="4"
              >
                <Box height="16" width="12" position="relative">
                  <PreviewImage
                    variants={first}
                    backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8EbDRqq75erAFsaqCpxLKJyfpdQAG_n4Co1JUPPkS_4gkJh8OZR_gEj7nc4rVOkapSU&usqp=CAU')"
                  />
                  <PreviewImage
                    variants={second}
                    backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetVbMQOTFflj5ATmu6Trpvp7dGaj-FoGKE6OWzze467L8BmBcX6wh5hbjipmCeIw9y2A&usqp=CAU')"
                  />
                  <PreviewImage
                    variants={third}
                    backgroundImage={`url("https://s.smallpdf.com/static/ad192f745313d40d79641d211bb78d52.svg")`}
                  />
                </Box>
                <Stack p="8" textAlign="center" spacing="1">
                  <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                    Drop PDF here
                  </Heading>
                  <Text fontWeight="light">or click to upload</Text>
                </Stack>
              </Stack>
            </Box>
            <Input
              type="file"
              height="100%"
              width="100%"
              position="absolute"
              top="0"
              left="0"
              opacity="0"
              aria-hidden="true"
              onDragEnter={startAnimation}
              onDragLeave={stopAnimation}
              accept="application/pdf"
              onChange={changeHandler}
            />
          </Box>
        </Box>
      </AspectRatio>
    </Container>
  );
};

export default GetPDF;
