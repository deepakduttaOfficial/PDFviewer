import React, { useContext, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdf from "./JavascriptProject.pdf";
import { Box, Stack } from "@chakra-ui/react";
import PdfWidth from "./context/PdfWidth";
import Pages from "./context/Pages";
import TotalPage from "./context/TotalPage";

const PdfMain = () => {
  const { pdfWidth } = useContext(PdfWidth);
  const { setNumPages } = useContext(TotalPage);
  const { pageNumber, setPageNumber } = useContext(Pages);
  // const [pageNumber, setPageNumber] = useState(1);
  //   const [pdfWidth, setPdfWidth] = useState(600);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} mt={6}>
      <Box boxShadow="dark-lg" rounded={"md"}>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height={100} width={pdfWidth} pageNumber={pageNumber} />
        </Document>
      </Box>
    </Stack>
  );
};

export default PdfMain;
