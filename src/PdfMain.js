import { useContext } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Box, Button, Stack } from "@chakra-ui/react";
import PdfWidth from "./context/PdfWidth";
import Pages from "./context/Pages";
import TotalPage from "./context/TotalPage";
import GetPDF from "./GetPDF";
import GetPdf from "./context/GetPdf";

const PdfMain = () => {
  const { pdfWidth } = useContext(PdfWidth);
  const { setNumPages } = useContext(TotalPage);
  const { pageNumber, setPageNumber } = useContext(Pages);
  const { value, setValue } = useContext(GetPdf);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const clearAll = () => {
    setValue();
    setNumPages();
    setPageNumber();
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} mt={6}>
      <Box boxShadow="dark-lg" rounded={"md"} textAlign={"center"}>
        {value ? (
          <>
            <Document file={value} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                height={100}
                width={pdfWidth}
                pageNumber={pageNumber || 1}
              />
            </Document>
            <Button colorScheme="red" mt={5} onClick={clearAll}>
              Clear PDF
            </Button>
          </>
        ) : (
          <GetPDF />
        )}
      </Box>
    </Stack>
  );
};

export default PdfMain;
