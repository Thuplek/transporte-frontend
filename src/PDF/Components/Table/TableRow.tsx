import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { formatLts, formatMoney } from '../../../utils/format';
import mockCombustivel from "../../combustivelMock.json"
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
     alignItems: 'center',
    width: "100%"
  },
  description: {
    width: '60%',
  },
  xyz: {
    width: '40%',
  },
});

const TableRow = ({ items }) => {
  const rows = items.map((item) => (
    <View style={styles.row} key={item.nomeSecretaria.toString()}>
      <Text style={styles.description}>{item.nomeSecretaria}</Text>
      {mockCombustivel.map((comb) => <Text style={styles.xyz}>{formatMoney(item.porCombustivel?.[comb.id]?.valor_total)}</Text>)}
      {/* {mockCombustivel.map((comb) => <Text style={styles.xyz}>{formatLts(item.porCombustivel?.[comb.id]?.quantidade_lt)}</Text>)} */}
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default TableRow;
