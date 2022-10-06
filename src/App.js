import { useState } from "react";
import "./style/App.css";
import PdfWidth from "./context/PdfWidth";
import Navbar from "./navbar/Navbar";
import PdfMain from "./PdfMain";
import Pages from "./context/Pages";
import TotalPage from "./context/TotalPage";
function App() {
  const [pdfWidth, setPdfWidth] = useState(300);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  return (
    <TotalPage.Provider value={{ numPages, setNumPages }}>
      <Pages.Provider value={{ pageNumber, setPageNumber }}>
        <PdfWidth.Provider value={{ pdfWidth, setPdfWidth }}>
          <Navbar />
          <PdfMain />
        </PdfWidth.Provider>
      </Pages.Provider>
    </TotalPage.Provider>
  );
}

export default App;
