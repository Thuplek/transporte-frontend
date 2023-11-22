// import {
//   Document,
//   Text,
//   View,
//   StyleSheet,
//   PDFViewer,
// } from '@react-pdf/renderer';
// import combustivelmock from '../combustivelMock.json';
// import abastecimentomock from '../mock.json';
// // import './style.css';
// import styled from 'styled-components';

// import jsPDF from 'jspdf';
// import { useRef } from 'react';
// import { formatLts, formatMoney } from '../../utils/format';

// const style = {
//   table: {
//     '& td': {
//       padding: '2px',
//       'text-align': 'left',
//       'font-size': '10px',
//     },
//     '& th': {
//       padding: '2px',
//       'text-align': 'left',
//       'font-size': '10px',
//     },
//   },
// };
// const TR = styled.tr`
//   &:nth-child(2n + 1) {
//     background: #d4d4d4;
//   }
// `;

// const RelatorioMensalSecretaria = () => {
//   const refFile = useRef(null);
//   const handleGeneratePdf = () => {
//     const doc = new jsPDF({
//       format: 'a4',
//       orientation: 'landscape',
//       unit: 'px',
//     });

//     // Adding the fonts.
//     doc.setFont('Inter-Regular', 'normal');

//     doc.html(refFile?.current, {
//       async callback(doc) {
//         await doc.save('document');
//       },
//     });
//   };

//   return (
//     <div ref={refFile}>
//       <h3 onClick={() => handleGeneratePdf()}>Abastecimentos por secretaria</h3>
//       <table style={style.table}>
//         <thead>
//           <tr>
//             <th>Data</th>
//             {combustivelmock.map((item) => (
//               <th>{item.nome}</th>
//             ))}

//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody style={style.tbody}>
//           {abastecimentomock.map((item) => {
//             return (
//               <TR>
//                 <td>{item.nomeSecretaria}</td>
//                 {combustivelmock.map((cb) => {
//                   const idCombustivel = cb.id as string;
//                   return (
//                     <th>
//                       {formatLts(
//                         item?.porCombustivel?.[idCombustivel]?.quantidade_lt
//                       )}{' '}
//                       <br />
//                       {formatMoney(
//                         item?.porCombustivel?.[idCombustivel]?.valor_total
//                       )}
//                     </th>
//                   );
//                 })}
//                 <th>
//                   {formatLts(item.abastecimentos.quantidade_lt)}
//                   <br />
//                   {formatMoney(item.abastecimentos.valor_total)}
//                 </th>
//               </TR>
//             );
//           })}

//           {/* <tr>
//                     <th>Totais</th>
//                     @foreach($lsCombustivel as $key => $combustivel)
//                     @php
//                     {{
//                     $valorLitros = 0;
//                     $valorReais = 0;
//                     $combustivelASerMostrado = $combustivel['value'];
//                     foreach($valoresTotaisCombustiveis['combustiveis'] as $comb){
//                         if($comb['id'] == $combustivelASerMostrado){
//                             $valorLitros= $comb['totalLitros'];
//                             $valorReais = $comb['valorTotal'];

//                         };
//                     };
//                 }}
//                     @endphp
//                     <th>{{ 'Lts: '.number_format( $valorLitros, 3)}}<br> {{ 'R$ '.number_format( $valorReais, 2,',','.') }}</th>


//                     @endforeach
//                     <th>{{ 'R$ '.number_format( $valoresTotaisCombustiveis['valorTotal'], 2,',','.') }}</th>
//                 </tr> */}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default RelatorioMensalSecretaria;
