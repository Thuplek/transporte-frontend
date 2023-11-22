// <!DOCTYPE>
// <html >

// <head>
//     <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
//     <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> -->
//     <title>{{ $title }}</title>
//     <style type="text/css">
//         table {
//             page-break-inside: auto
//         }

//         tr {
//             page-break-inside: avoid;
//             page-break-after: auto
//         }

//         thead {
//             display: table-header-group
//         }

//         tfoot {
//             display: table-footer-group
//         }

//         table {
//             width: 100%;
//         }

//         table td {
//             padding: 2px;
//             text-align: left;
//             font-size: 10px;
//         }

//         table th {
//             padding: 2px;
//             text-align: left;
//             font-size: 10px;
//         }

//         tbody tr:nth-child(2n+1) {
//             background-color: rgba(0, 0, 0, .05);

//         }

//         tbody {
//             margin-top: 50px
//         }

//         thead {

//             border: solid 1px black
//         }

//         h3 {
//             font-size: 14px;
//         }

//         body {
//             height: 100vh;
//         }

//         footer {
//             position: fixed;
//             bottom: -60px;
//             left: 0px;
//             right: 0px;
//             height: 50px;

//             /** Extra personal styles **/

//             text-align: center;
//             line-height: 35px;
//         }

//         .footer {
//             display: block;
//             position: fixed;
//             text-align: center;
//             position: running(footer);
//         }
//     </style>
// </head>

// <body>
//     <main>
//         <h3>Abastecimentos por secretaria</h3>

//         <table>
//             <thead>
//                 <tr>
//                     <th>Data</th>
//                     @foreach($lsCombustivel as $combustivel)
//                     <th>{{$combustivel['label']}}</th>
//                     @endforeach
//                     <th>Total</th>


//                 </tr>
//             </thead>
//             <tbody>
//                 @foreach($relatorioPorSecretaria as $row)
//                 <tr>
//                     <td>{{ $row['nome_secretaria'] }}</td>

//                     @foreach($lsCombustivel as $key => $combustivel)
//                     @php
//                     {{
//                     $valorLitros = 0;
//                     $valorReais = 0;
//                     $combustivelASerMostrado = $combustivel['value'];
//                     foreach($row['combustiveis'] as $comb){
//                         if($comb['id'] == $combustivelASerMostrado){
//                             $valorLitros= $comb['totalLitros'];
//                             $valorReais = $comb['valorTotal'];

//                         };
//                     };
//                 }}
//                     @endphp


//                     <th>{{ 'Lts: '.number_format( $valorLitros, 3)}}<br> {{ 'R$ '.number_format( $valorReais, 2,',','.') }}</th>

//                     @endforeach
//                     <th>{{'R$ '.number_format( $row['valorTotal'], 2,',','.') }}</th>
//                 </tr>
//                 @endforeach

//                 <tr>
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
//                 </tr>


//             </tbody>
//         </table>
//         <br>
//         <h3>Abasteciemto por posto</h3>
//         <table>
//             <thead>
//                 <tr>
//                     <th>Data</th>
//                     @foreach($lsCombustivel as $combustivel)
//                     <th>{{$combustivel['label']}}</th>
//                     @endforeach
//                     <th>Total</th>


//                 </tr>
//             </thead>
//             <tbody>
//                 @foreach($relatorioPorPosto['postos'] as $row)
//                 <tr>
//                     <td>{{ $row['nmPosto'] }}</td>

//                     @foreach($lsCombustivel as $key => $combustivel)
//                     @php
//                     {{
//                     $valorLitros = 0;
//                     $valorReais = 0;
//                     $combustivelASerMostrado = $combustivel['value'];
//                     foreach($row['abstecimentoPorCombustivel'] as $comb){
//                         if($comb['id'] == $combustivelASerMostrado){
//                             $valorLitros= $comb['totalLitros'];
//                             $valorReais = $comb['valorTotal'];

//                         };
//                     };
//                 }}
//                     @endphp


//                     <th>{{ 'Lts: '.number_format( $valorLitros, 3)}}<br> {{ 'R$ '.number_format( $valorReais, 2,',','.') }}</th>

//                     @endforeach
//                     <th>{{'R$ '.number_format( $row['valorTotal'], 2,',','.') }}</th>
//                 </tr>
//                 @endforeach

//                 <tr>
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
//                     <th></th>
//                 </tr>


//             </tbody>
//         </table>
//         <br>
//     </main>
//     <footer>
//         {{$periodo}}
//     </footer>
// </body>


// </html>