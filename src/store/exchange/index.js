import rate from './rate.js';
import depth from './depth.js';
import activeTxPair from './activeTxPair';
import activeTx from './activeTx';
import latestTx from './latestTx';
import balance from './balance';
import market from './market';
import tokens from './tokens';
import currentOpenOrders from './currentOpenOrders';
import limit from './limit';
import fee from './fee';
import latestOrder from './latestOrder';
import tokenDecimalsLimit from './tokenDecimalsLimit';

export default {
    exchangeRate: rate,
    exchangeDepth: depth,
    exchangeActiveTx: activeTx,
    exchangeActiveTxPair: activeTxPair,
    exchangeLatestTx: latestTx,
    exchangeBalance: balance,
    exchangeMarket: market,
    exchangeTokens: tokens,
    exchangeCurrentOpenOrders: currentOpenOrders,
    exchangeLimit: limit,
    exchangeFee: fee,
    exchangeLatestOrder: latestOrder,
    exchangeTokenDecimalsLimit: tokenDecimalsLimit
};
