import React from "react";
import { Document,Page, StyleSheet } from "@react-pdf/renderer";
import ItemsTable from "./ItemsTable.tsx";
import TableRow from "./TableRow.tsx";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    flexDirection: "column",
  },
});

const Table = ({ data,coluns }) => (

    
  <Document>
    <Page size="A4" style={styles.page}>
      <ItemsTable data={data} />
      // ...
    </Page>
  </Document>
);

export default Table;