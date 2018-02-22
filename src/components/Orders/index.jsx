import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Orders = (props) => {
  const dataToBeRendered = props.data[props.keys];
  const table = dataToBeRendered.map(row =>
    (
      <tr className="Orders-row-tr">
        <td className="Orders-row-td">{row.price}</td>
        <td className="Orders-row-td">{row.quantity}</td>
        <td className="Orders-row-td">{row.total}</td>
      </tr>
    ));
  return (
    <div className="Orders-div">
      <table className="Orders-table" cellSpacing="0" cellPadding="0">
        <tr>
          <th className="Orders-table-heading">PRICE</th>
          <th className="Orders-table-heading">QUANTITY</th>
          <th className="Orders-table-heading">TOTAL</th>
        </tr>
        {table}
      </table>
    </div>
  );
};
Orders.propTypes = {
  data: PropTypes.instanceOf({}),
  keys: PropTypes.string,
};
Orders.defaultProps = {
  data: {
    asks:
    [{
      price: '0.08093500',
      quantity: '0.55800000',
      total: '0.04516173',
    },
    {
      price: '0.08093600',
      quantity: '0.11700000',
      total: '0.00946951',
    },
    {
      price: '0.08093800',
      quantity: '0.13500000',
      total: '0.01092663',
    },
    {
      price: '0.08093900',
      quantity: '0.10100000',
      total: '0.00817484',
    },
    {
      price: '0.08094000',
      quantity: '11.06700000',
      total: '0.89576298',
    },
    {
      price: '0.08094100',
      quantity: '1.13200000',
      total: '0.09162521',
    },
    {
      price: '0.08094200',
      quantity: '3.29000000',
      total: '0.26629918',
    },
    {
      price: '0.08094300',
      quantity: '0.06600000',
      total: '0.00534224',
    },
    {
      price: '0.08094400',
      quantity: '2.15100000',
      total: '0.17411054',
    },
    {
      price: '0.08097000',
      quantity: '0.75900000',
      total: '0.06145623',
    },
    {
      price: '0.08097100',
      quantity: '0.07400000',
      total: '0.00599185',
    },
    {
      price: '0.08098600',
      quantity: '0.36800000',
      total: '0.02980285',
    },
    {
      price: '0.08098800',
      quantity: '0.06100000',
      total: '0.00494027',
    },
    {
      price: '0.08098900',
      quantity: '0.63900000',
      total: '0.05175197',
    },
    {
      price: '0.08099000',
      quantity: '4.30000000',
      total: '0.34825700',
    },
    {
      price: '0.08099500',
      quantity: '0.17400000',
      total: '0.01409313',
    },
    {
      price: '0.08099800',
      quantity: '0.50000000',
      total: '0.04049900',
    },
    {
      price: '0.08101100',
      quantity: '0.18500000',
      total: '0.01498703',
    },
    {
      price: '0.08101400',
      quantity: '43.28100000',
      total: '3.50636693',
    },
    {
      price: '0.08101600',
      quantity: '0.10000000',
      total: '0.00810160',
    },
    {
      price: '0.08102000',
      quantity: '0.23600000',
      total: '0.01912072',
    },
    {
      price: '0.08102200',
      quantity: '0.57100000',
      total: '0.04626356',
    },
    {
      price: '0.08103800',
      quantity: '0.36900000',
      total: '0.02990302',
    },
    {
      price: '0.08104100',
      quantity: '0.37400000',
      total: '0.03030933',
    },
    {
      price: '0.08104200',
      quantity: '0.09200000',
      total: '0.00745586',
    },
    {
      price: '0.08104300',
      quantity: '0.37500000',
      total: '0.03039113',
    },
    {
      price: '0.08104700',
      quantity: '0.16900000',
      total: '0.01369694',
    },
    {
      price: '0.08104800',
      quantity: '1.56200000',
      total: '0.12659698',
    },
    {
      price: '0.08104900',
      quantity: '1.51200000',
      total: '0.12254609',
    },
    {
      price: '0.08105000',
      quantity: '0.16800000',
      total: '0.01361640',
    },
    {
      price: '0.08105100',
      quantity: '0.07600000',
      total: '0.00615988',
    },
    {
      price: '0.08105200',
      quantity: '0.20300000',
      total: '0.01645356',
    },
    {
      price: '0.08105800',
      quantity: '0.02500000',
      total: '0.00202645',
    },
    {
      price: '0.08106200',
      quantity: '0.12600000',
      total: '0.01021381',
    },
    {
      price: '0.08106700',
      quantity: '3.75000000',
      total: '0.30400125',
    },
    {
      price: '0.08106800',
      quantity: '3.30700000',
      total: '0.26809188',
    },
    {
      price: '0.08107600',
      quantity: '0.38800000',
      total: '0.03145749',
    },
    {
      price: '0.08109100',
      quantity: '0.21600000',
      total: '0.01751566',
    },
    {
      price: '0.08109300',
      quantity: '2.11100000',
      total: '0.17118732',
    },
    {
      price: '0.08109600',
      quantity: '0.08700000',
      total: '0.00705535',
    },
    {
      price: '0.08110000',
      quantity: '4.34500000',
      total: '0.35237950',
    },
    {
      price: '0.08110200',
      quantity: '0.37000000',
      total: '0.03000774',
    },
    {
      price: '0.08111100',
      quantity: '0.92500000',
      total: '0.07502768',
    },
    {
      price: '0.08111600',
      quantity: '0.03700000',
      total: '0.00300129',
    },
    {
      price: '0.08112400',
      quantity: '0.16400000',
      total: '0.01330434',
    },
    {
      price: '0.08113000',
      quantity: '0.40000000',
      total: '0.03245200',
    },
    {
      price: '0.08113100',
      quantity: '0.22200000',
      total: '0.01801108',
    },
    {
      price: '0.08113300',
      quantity: '0.02000000',
      total: '0.00162266',
    },
    {
      price: '0.08114000',
      quantity: '0.60700000',
      total: '0.04925198',
    },
    {
      price: '0.08115000',
      quantity: '5.43700000',
      total: '0.44121255',
    },
    {
      price: '0.08115800',
      quantity: '1.23500000',
      total: '0.10023013',
    },
    {
      price: '0.08116000',
      quantity: '0.10000000',
      total: '0.00811600',
    },
    {
      price: '0.08116600',
      quantity: '0.12300000',
      total: '0.00998342',
    },
    {
      price: '0.08117400',
      quantity: '0.02500000',
      total: '0.00202935',
    },
    {
      price: '0.08117700',
      quantity: '0.07800000',
      total: '0.00633181',
    },
    {
      price: '0.08117800',
      quantity: '0.24700000',
      total: '0.02005097',
    },
    {
      price: '0.08119000',
      quantity: '0.23500000',
      total: '0.01907965',
    },
    {
      price: '0.08119200',
      quantity: '1.10800000',
      total: '0.08996074',
    },
    {
      price: '0.08119600',
      quantity: '0.12000000',
      total: '0.00974352',
    },
    {
      price: '0.08119800',
      quantity: '0.23700000',
      total: '0.01924393',
    },
    {
      price: '0.08119900',
      quantity: '0.13000000',
      total: '0.01055587',
    },
    {
      price: '0.08120000',
      quantity: '4.63100000',
      total: '0.37603720',
    },
    {
      price: '0.08120200',
      quantity: '0.29900000',
      total: '0.02427940',
    },
    {
      price: '0.08121400',
      quantity: '0.13200000',
      total: '0.01072025',
    },
    {
      price: '0.08123900',
      quantity: '0.26700000',
      total: '0.02169081',
    },
    {
      price: '0.08128500',
      quantity: '0.05000000',
      total: '0.00406425',
    },
    {
      price: '0.08129600',
      quantity: '0.18600000',
      total: '0.01512106',
    },
    {
      price: '0.08129900',
      quantity: '0.14000000',
      total: '0.01138186',
    },
    {
      price: '0.08130000',
      quantity: '1.39600000',
      total: '0.11349480',
    },
    {
      price: '0.08131000',
      quantity: '0.23700000',
      total: '0.01927047',
    },
    {
      price: '0.08131200',
      quantity: '0.02000000',
      total: '0.00162624',
    },
    {
      price: '0.08133200',
      quantity: '0.86800000',
      total: '0.07059618',
    },
    {
      price: '0.08134300',
      quantity: '0.13300000',
      total: '0.01081862',
    },
    {
      price: '0.08135000',
      quantity: '0.38800000',
      total: '0.03156380',
    },
    {
      price: '0.08136900',
      quantity: '0.11800000',
      total: '0.00960154',
    },
    {
      price: '0.08137300',
      quantity: '0.64000000',
      total: '0.05207872',
    },
    {
      price: '0.08137800',
      quantity: '6.83300000',
      total: '0.55605587',
    },
    {
      price: '0.08138400',
      quantity: '0.02500000',
      total: '0.00203460',
    },
    {
      price: '0.08139700',
      quantity: '0.21500000',
      total: '0.01750035',
    },
    {
      price: '0.08139900',
      quantity: '0.15000000',
      total: '0.01220985',
    },
    {
      price: '0.08140000',
      quantity: '3.65900000',
      total: '0.29784260',
    },
    {
      price: '0.08141100',
      quantity: '0.03900000',
      total: '0.00317503',
    },
    {
      price: '0.08142400',
      quantity: '27.30000000',
      total: '2.22287520',
    },
    {
      price: '0.08143100',
      quantity: '2.04600000',
      total: '0.16660783',
    },
    {
      price: '0.08145800',
      quantity: '1.25700000',
      total: '0.10239271',
    },
    {
      price: '0.08148800',
      quantity: '5.00000000',
      total: '0.40744000',
    },
    {
      price: '0.08148900',
      quantity: '1.35900000',
      total: '0.11074355',
    },
    {
      price: '0.08149000',
      quantity: '400.30000000',
      total: '32.62044700',
    },
    {
      price: '0.08149100',
      quantity: '0.02000000',
      total: '0.00162982',
    },
    {
      price: '0.08149400',
      quantity: '4.00000000',
      total: '0.32597600',
    },
    {
      price: '0.08149500',
      quantity: '13.47400000',
      total: '1.09806363',
    },
    {
      price: '0.08149900',
      quantity: '1.02400000',
      total: '0.08345498',
    },
    {
      price: '0.08150000',
      quantity: '21.79000000',
      total: '1.77588500',
    },
    {
      price: '0.08150100',
      quantity: '0.20000000',
      total: '0.01630020',
    },
    {
      price: '0.08150300',
      quantity: '2.47600000',
      total: '0.20180143',
    },
    {
      price: '0.08150600',
      quantity: '0.10900000',
      total: '0.00888415',
    },
    {
      price: '0.08151400',
      quantity: '0.02000000',
      total: '0.00163028',
    },
    {
      price: '0.08152400',
      quantity: '0.17000000',
      total: '0.01385908',
    },
    {
      price: '0.08153800',
      quantity: '0.15600000',
      total: '0.01271993',
    },
    {
      price: '0.08153900',
      quantity: '0.01300000',
      total: '0.00106001',
    }],
    bids:
    [{
      price: '0.08085600',
      quantity: '0.36400000',
      total: '0.02943158',
    },
    {
      price: '0.08085500',
      quantity: '1.88500000',
      total: '0.15241167',
    },
    {
      price: '0.08085400',
      quantity: '3.49100000',
      total: '0.28226131',
    },
    {
      price: '0.08085300',
      quantity: '3.68200000',
      total: '0.29770075',
    },
    {
      price: '0.08085200',
      quantity: '0.12500000',
      total: '0.01010650',
    },
    {
      price: '0.08085100',
      quantity: '0.15500000',
      total: '0.01253191',
    },
    {
      price: '0.08084800',
      quantity: '0.01600000',
      total: '0.00129357',
    },
    {
      price: '0.08084700',
      quantity: '0.43000000',
      total: '0.03476421',
    },
    {
      price: '0.08084000',
      quantity: '2.35500000',
      total: '0.19037820',
    },
    {
      price: '0.08083600',
      quantity: '0.20400000',
      total: '0.01649054',
    },
    {
      price: '0.08083400',
      quantity: '0.21600000',
      total: '0.01746014',
    },
    {
      price: '0.08083000',
      quantity: '2.50200000',
      total: '0.20223666',
    },
    {
      price: '0.08082700',
      quantity: '0.29200000',
      total: '0.02360148',
    },
    {
      price: '0.08081900',
      quantity: '0.53800000',
      total: '0.04348062',
    },
    {
      price: '0.08081200',
      quantity: '0.50000000',
      total: '0.04040600',
    },
    {
      price: '0.08081000',
      quantity: '0.44400000',
      total: '0.03587964',
    },
    {
      price: '0.08080000',
      quantity: '0.05700000',
      total: '0.00460560',
    },
    {
      price: '0.08079700',
      quantity: '0.45700000',
      total: '0.03692423',
    },
    {
      price: '0.08079600',
      quantity: '76.78900000',
      total: '6.20424404',
    },
    {
      price: '0.08079500',
      quantity: '0.14400000',
      total: '0.01163448',
    },
    {
      price: '0.08079400',
      quantity: '1.00000000',
      total: '0.08079400',
    },
    {
      price: '0.08079300',
      quantity: '0.25000000',
      total: '0.02019825',
    },
    {
      price: '0.08079100',
      quantity: '0.12000000',
      total: '0.00969492',
    },
    {
      price: '0.08079000',
      quantity: '0.94800000',
      total: '0.07658892',
    },
    {
      price: '0.08078300',
      quantity: '0.36600000',
      total: '0.02956658',
    },
    {
      price: '0.08078100',
      quantity: '0.53600000',
      total: '0.04329862',
    },
    {
      price: '0.08077800',
      quantity: '0.36800000',
      total: '0.02972630',
    },
    {
      price: '0.08077500',
      quantity: '0.36600000',
      total: '0.02956365',
    },
    {
      price: '0.08076800',
      quantity: '0.10200000',
      total: '0.00823834',
    },
    {
      price: '0.08076600',
      quantity: '0.12300000',
      total: '0.00993422',
    },
    {
      price: '0.08076500',
      quantity: '0.56000000',
      total: '0.04522840',
    },
    {
      price: '0.08076200',
      quantity: '0.11100000',
      total: '0.00896458',
    },
    {
      price: '0.08076000',
      quantity: '0.01400000',
      total: '0.00113064',
    },
    {
      price: '0.08075800',
      quantity: '0.82400000',
      total: '0.06654459',
    },
    {
      price: '0.08075700',
      quantity: '0.68100000',
      total: '0.05499552',
    },
    {
      price: '0.08075200',
      quantity: '3.75000000',
      total: '0.30282000',
    },
    {
      price: '0.08075100',
      quantity: '0.25600000',
      total: '0.02067226',
    },
    {
      price: '0.08075000',
      quantity: '0.41600000',
      total: '0.03359200',
    },
    {
      price: '0.08074400',
      quantity: '1.38700000',
      total: '0.11199193',
    },
    {
      price: '0.08074200',
      quantity: '0.82300000',
      total: '0.06645067',
    },
    {
      price: '0.08074000',
      quantity: '0.23200000',
      total: '0.01873168',
    },
    {
      price: '0.08073900',
      quantity: '0.36800000',
      total: '0.02971195',
    },
    {
      price: '0.08073800',
      quantity: '0.24200000',
      total: '0.01953860',
    },
    {
      price: '0.08073700',
      quantity: '0.22900000',
      total: '0.01848877',
    },
    {
      price: '0.08073600',
      quantity: '0.12100000',
      total: '0.00976906',
    },
    {
      price: '0.08073500',
      quantity: '0.36600000',
      total: '0.02954901',
    },
    {
      price: '0.08073400',
      quantity: '0.10200000',
      total: '0.00823487',
    },
    {
      price: '0.08073300',
      quantity: '0.08900000',
      total: '0.00718524',
    },
    {
      price: '0.08073000',
      quantity: '1.10000000',
      total: '0.08880300',
    },
    {
      price: '0.08072800',
      quantity: '0.17000000',
      total: '0.01372376',
    },
    {
      price: '0.08072600',
      quantity: '10.00000000',
      total: '0.80726000',
    },
    {
      price: '0.08072500',
      quantity: '0.20300000',
      total: '0.01638718',
    },
    {
      price: '0.08072400',
      quantity: '0.19300000',
      total: '0.01557973',
    },
    {
      price: '0.08072300',
      quantity: '3.50200000',
      total: '0.28269195',
    },
    {
      price: '0.08072100',
      quantity: '0.36800000',
      total: '0.02970533',
    },
    {
      price: '0.08071700',
      quantity: '0.05000000',
      total: '0.00403585',
    },
    {
      price: '0.08070800',
      quantity: '0.36900000',
      total: '0.02978125',
    },
    {
      price: '0.08070400',
      quantity: '0.06700000',
      total: '0.00540717',
    },
    {
      price: '0.08070000',
      quantity: '11.10800000',
      total: '0.89641560',
    },
    {
      price: '0.08069800',
      quantity: '0.02000000',
      total: '0.00161396',
    },
    {
      price: '0.08069400',
      quantity: '4.83200000',
      total: '0.38991341',
    },
    {
      price: '0.08069300',
      quantity: '0.03700000',
      total: '0.00298564',
    },
    {
      price: '0.08069200',
      quantity: '0.05900000',
      total: '0.00476083',
    },
    {
      price: '0.08067800',
      quantity: '0.19800000',
      total: '0.01597424',
    },
    {
      price: '0.08067700',
      quantity: '0.15200000',
      total: '0.01226290',
    },
    {
      price: '0.08067600',
      quantity: '0.36900000',
      total: '0.02976944',
    },
    {
      price: '0.08067400',
      quantity: '0.41900000',
      total: '0.03380241',
    },
    {
      price: '0.08066900',
      quantity: '0.24500000',
      total: '0.01976391',
    },
    {
      price: '0.08066000',
      quantity: '0.64000000',
      total: '0.05162240',
    },
    {
      price: '0.08065800',
      quantity: '0.49800000',
      total: '0.04016768',
    },
    {
      price: '0.08065700',
      quantity: '1.06000000',
      total: '0.08549642',
    },
    {
      price: '0.08065500',
      quantity: '0.06400000',
      total: '0.00516192',
    },
    {
      price: '0.08065000',
      quantity: '12.83600000',
      total: '1.03522340',
    },
    {
      price: '0.08064800',
      quantity: '0.67800000',
      total: '0.05467934',
    },
    {
      price: '0.08064600',
      quantity: '0.10300000',
      total: '0.00830654',
    },
    {
      price: '0.08064300',
      quantity: '0.16400000',
      total: '0.01322545',
    },
    {
      price: '0.08063500',
      quantity: '0.36600000',
      total: '0.02951241',
    },
    {
      price: '0.08063400',
      quantity: '0.08100000',
      total: '0.00653135',
    },
    {
      price: '0.08063200',
      quantity: '0.08100000',
      total: '0.00653119',
    },
    {
      price: '0.08063100',
      quantity: '0.02000000',
      total: '0.00161262',
    },
    {
      price: '0.08061400',
      quantity: '0.02000000',
      total: '0.00161228',
    },
    {
      price: '0.08060400',
      quantity: '0.10400000',
      total: '0.00838282',
    },
    {
      price: '0.08060300',
      quantity: '0.02500000',
      total: '0.00201507',
    },
    {
      price: '0.08058200',
      quantity: '3.72100000',
      total: '0.29984562',
    },
    {
      price: '0.08058000',
      quantity: '1.29800000',
      total: '0.10459284',
    },
    {
      price: '0.08057900',
      quantity: '0.10600000',
      total: '0.00854137',
    },
    {
      price: '0.08057000',
      quantity: '0.10500000',
      total: '0.00845985',
    },
    {
      price: '0.08056500',
      quantity: '0.36200000',
      total: '0.02916453',
    },
    {
      price: '0.08055000',
      quantity: '18.09200000',
      total: '1.45731060',
    },
    {
      price: '0.08053900',
      quantity: '0.02000000',
      total: '0.00161078',
    },
    {
      price: '0.08053000',
      quantity: '6.04300000',
      total: '0.48664279',
    },
    {
      price: '0.08052900',
      quantity: '6.17900000',
      total: '0.49758869',
    },
    {
      price: '0.08052800',
      quantity: '0.12500000',
      total: '0.01006600',
    },
    {
      price: '0.08052600',
      quantity: '11.17000000',
      total: '0.89947542',
    },
    {
      price: '0.08051900',
      quantity: '0.37300000',
      total: '0.03003359',
    },
    {
      price: '0.08051800',
      quantity: '0.83500000',
      total: '0.06723253',
    },
    {
      price: '0.08051300',
      quantity: '0.02000000',
      total: '0.00161026',
    },
    {
      price: '0.08050600',
      quantity: '0.50000000',
      total: '0.04025300',
    },
    {
      price: '0.08050000',
      quantity: '0.65400000',
      total: '0.05264700',
    },
    {
      price: '0.08048500',
      quantity: '18.61000000',
      total: '1.49782585',
    }],
  },
  keys: 'asks',
};

export default Orders;

