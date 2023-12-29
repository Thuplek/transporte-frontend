import { Document, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';
import Table from './components/Table';
interface IDinamicoJson {
  json: string;
}

const DinamicoJson: React.FC<IDinamicoJson> = ({ json }) => {
  const coluns = Object.keys(json[0]);
  return (
    <Document>
      <Page size='A4' orientation='landscape'>
        <Table coluns={coluns} data={json} />
      </Page>
    </Document>
  );
};
export default DinamicoJson;
