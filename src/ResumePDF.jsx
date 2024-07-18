// ResumePDF.js
import { Document, Page } from "react-pdf";

const ResumePDF = () => {
  return (
    <div>
      <Document file="../public/files/nedaaCV.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default ResumePDF;
