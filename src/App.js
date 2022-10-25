import { useState } from "react";
import "./style/App.css";
import PdfWidth from "./context/PdfWidth";
import Navbar from "./navbar/Navbar";
import PdfMain from "./PdfMain";
import Pages from "./context/Pages";
import TotalPage from "./context/TotalPage";
import GetPdf from "./context/GetPdf";
function App() {
  const [pdfWidth, setPdfWidth] = useState(300);
  const [pageNumber, setPageNumber] = useState();
  const [numPages, setNumPages] = useState(null);
  const [value, setValue] = useState();

  return (
    <GetPdf.Provider value={{ value, setValue }}>
      <TotalPage.Provider value={{ numPages, setNumPages }}>
        <Pages.Provider value={{ pageNumber, setPageNumber }}>
          <PdfWidth.Provider value={{ pdfWidth, setPdfWidth }}>
            <Navbar />
            <PdfMain />
          </PdfWidth.Provider>
        </Pages.Provider>
      </TotalPage.Provider>
    </GetPdf.Provider>
  );
}

export default App;
