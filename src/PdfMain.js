import React, { useContext } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdf from "./JavascriptProject.pdf";
import { Box, Stack } from "@chakra-ui/react";
import PdfWidth from "./context/PdfWidth";
import Pages from "./context/Pages";
import TotalPage from "./context/TotalPage";

const PdfMain = () => {
  const { pdfWidth } = useContext(PdfWidth);
  const { setNumPages } = useContext(TotalPage);
  const { pageNumber } = useContext(Pages);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} mt={6}>
      <Box boxShadow="dark-lg" rounded={"md"} textAlign={"center"}>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height={100} width={pdfWidth} pageNumber={pageNumber} />
        </Document>
      </Box>
    </Stack>
  );
};

export default PdfMain;
