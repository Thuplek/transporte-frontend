import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import TableRow from "./TableRow.tsx";
import mockCombustivel from "../../combustivelMock.json"

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cell:{
    
  }
});

const ItemsTable = ({ data }) => (
  <View style={styles.tableContainer}>
    {/*<TableHeader />*/}
    
    {mockCombustivel.map((comb) => <Text style={styles.cell}>{comb.nome}</Text>)}

    <TableRow  items={data} />
    {/*<TableFooter items={data.items} />*/}
  </View>
);

export default ItemsTable;