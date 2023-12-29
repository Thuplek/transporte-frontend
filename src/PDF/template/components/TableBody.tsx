import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import nameCampoToRender from '@utils/enums/nameCampoToRender';
import { colors } from '@app/theme/colors';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.greyLight,
    alignItems: 'center',
    height: 24,
    width: '100%',
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    gap: 6,
  },
  colum: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    // minWidth: 100,
    borderBottomColor: 'black',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
});
interface ITableBody {
  coluns: string[];
  data: [];
}
const TableBody = ({ coluns, data }: ITableBody) => {
  return <Text>{data[0].id_combustivel}</Text>;
  return (
    <tbody style={styles.container}>
      {coluns.map((colun) => (
        <Text style={styles.colum}>{nameCampoToRender(colun)}</Text>
      ))}
    </tbody>
  );
};

export default TableBody;
