import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

import { Html } from 'react-pdf-html';

interface ITable {
  coluns: string[];
  data: [];
}

import ReactDOMServer from 'react-dom/server';
import nameCampoToRender from '@utils/enums/nameCampoToRender';
import { renderValorPdfName } from '@utils/formats';
import { CalcularValoresTotais } from '@utils/function/calcular';

const Table = ({ coluns, data }: ITable) => {
  const valoresTotais = CalcularValoresTotais(data);
  console.log('🚀 ~ Table ~ valoresTotais=>', valoresTotais);

  const element = (
    <html>
      <body>
        <style>
          {`.my-heading4 {
                background: darkgreen;
                color: white;
              }
              pre {
                background-color: #eee;
                padding: 10px;
              }
              table {
                page-break-inside: auto
            }
            
            tr {
                page-break-inside: avoid;
                page-break-after: auto
            }
            
            thead {
                display: table-header-group
                border-bottom: solid 1px black
            }
            
            tfoot {
                display: table-footer-group
            }
            
            table {
                width: 100%;
            }
            
            table td {
                padding: 2px;
                text-align: left;
                font-size: 10px;
            }
            
            table th {
                padding: 2px;
                text-align: left;
                font-size: 10px;
            }
            
            tbody tr:nth-child(2n+1) {
                background-color: rgba(0, 0, 0, .05);
            
            }
            
            tbody {
                // margin-top: 50px
            }
            
            thead {
            
                border: solid 1px black
            }
            
            h3 {
                font-size: 14px;
            }
            
            body {
                height: 100vh;
            }
            
            footer {
                position: fixed;
                bottom: -60px;
                left: 0px;
                right: 0px;
                height: 50px;
            
                /** Extra personal styles **/
            
                text-align: center;
                line-height: 35px;
            }`}
        </style>

        <table>
          <thead>
            <tr>
              {coluns.map((colun) => (
                <th>{nameCampoToRender(colun)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, indexRow) => {
              return (
                <tr key={`row-${indexRow}`}>
                  {coluns.map((colun, indexCol) => (
                    <td key={`col-${indexRow}-${indexCol}`}>
                      {renderValorPdfName(colun, item[colun])}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        <br />
        <br />
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>Total Litros</th>
              <th>Total R$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{valoresTotais.totalLitros}</td>
              <td>{valoresTotais.totalValor}</td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );

  const html = ReactDOMServer.renderToStaticMarkup(element);
  return (
    <View>
      <Html>{html}</Html>
    </View>
  );
};

export default Table;
