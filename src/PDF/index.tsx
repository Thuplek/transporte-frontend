import {
  Document,
  Page,
 
  StyleSheet,
  PDFViewer,
  
} from '@react-pdf/renderer';
// Create styles
const styles = StyleSheet.create({
  page: {},
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// import lista from './mock.json';
// import Table from './Components/Table';
// import ItemsTable from './Components/Table/ItemsTable';
// const RenderDados = () => {
//     return "teste"
// }
// Create Document Component
function BasicDocument() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
   

        {/*render a single page*/}
        <Page orientation='landscape' size='A4' style={styles.page}>
            {/* <ItemsTable data={lista} /> */}
         
       
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
