import React, { useEffect, useMemo, useState } from "react";
import "../Componentcss/Memo.css";

export default function Memo(props) {
  const [amount, setamount] = useState(0);
  let [Fromcurrency, setFromcurrency] = useState("");
  let [Tocurrency, setTocurrecy] = useState("");
  const [CurrencyList, setCurrencyList] = useState([]);
  const [changeamount, setchangeamount] = useState([]);
  const [currencyfullname, setcurrencyfullname] = useState({});
  // const [data, setdata] = useState([]);

  const ExchangeRate = {
    USD: 1,
    AED: 3.6725,
    AFN: 84.8866,
    ALL: 94.0659,
    AMD: 385.9975,
    ANG: 1.79,
    AOA: 832.4994,
    ARS: 278.9805,
    AUD: 1.5222,
    AWG: 1.79,
    AZN: 1.7,
    BAM: 1.7782,
    BBD: 2.0,
    BDT: 109.072,
    BGN: 1.7785,
    BHD: 0.376,
    BIF: 2814.8715,
    BMD: 1.0,
    BND: 1.3412,
    BOB: 6.8879,
    BRL: 4.8766,
    BSD: 1.0,
    BTN: 82.7575,
    BWP: 13.3989,
    BYN: 2.8216,
    BZD: 2.0,
    CAD: 1.3372,
    CDF: 2332.2463,
    CHF: 0.8739,
    CLP: 852.1044,
    CNY: 7.1911,
    COP: 4035.3061,
    CRC: 540.9278,
    CUP: 24.0,
    CVE: 100.2517,
    CZK: 22.0456,
    DJF: 177.721,
    DKK: 6.7829,
    DOP: 56.1174,
    DZD: 135.6007,
    EGP: 30.8177,
    ERN: 15.0,
    ETB: 55.0077,
    EUR: 0.9092,
    FJD: 2.2191,
    FKP: 0.7831,
    FOK: 6.7829,
    GBP: 0.7831,
    GEL: 2.608,
    GGP: 0.7831,
    GHS: 11.2321,
    GIP: 0.7831,
    GMD: 62.8413,
    GNF: 8535.8074,
    GTQ: 7.8307,
    GYD: 209.3911,
    HKD: 7.8073,
    HNL: 24.4924,
    HRK: 6.8503,
    HTG: 136.4592,
    HUF: 353.6745,
    IDR: 15206.2898,
    ILS: 3.6738,
    IMP: 0.7831,
    INR: 82.7576,
    IQD: 1312.6405,
    IRR: 41984.9103,
    ISK: 132.1713,
    JEP: 0.7831,
    JMD: 154.6162,
    JOD: 0.709,
    JPY: 142.3367,
    KES: 143.219,
    KGS: 87.7696,
    KHR: 4150.4279,
    KID: 1.5223,
    KMF: 447.2914,
    KRW: 1305.2606,
    KWD: 0.3074,
    KYD: 0.8333,
    KZT: 446.3477,
    LAK: 19124.7739,
    LBP: 15000.0,
    LKR: 322.0711,
    LRD: 186.4263,
    LSL: 18.6894,
    LYD: 4.801,
    MAD: 9.7533,
    MDL: 17.6885,
    MGA: 4470.8824,
    MKD: 56.1564,
    MMK: 2093.7542,
    MNT: 3452.0595,
    MOP: 8.0419,
    MRU: 37.9137,
    MUR: 44.9758,
    MVR: 15.4304,
    MWK: 1086.5908,
    MXN: 17.0678,
    MYR: 4.5575,
    MZN: 63.8773,
    NAD: 18.6894,
    NGN: 760.3629,
    NIO: 36.439,
    NOK: 10.1469,
    NPR: 132.412,
    NZD: 1.6382,
    OMR: 0.3845,
    PAB: 1.0,
    PEN: 3.6901,
    PGK: 3.5712,
    PHP: 56.1908,
    PKR: 286.8687,
    PLN: 4.0245,
    PYG: 7271.8209,
    QAR: 3.64,
    RON: 4.5051,
    RSD: 106.5501,
    RUB: 96.004,
    RWF: 1210.865,
    SAR: 3.75,
    SBD: 8.5054,
    SCR: 13.3516,
    SDG: 539.521,
    SEK: 10.6018,
    SGD: 1.3413,
    SHP: 0.7831,
    SLE: 21.2311,
    SLL: 21231.1017,
    SOS: 569.905,
    SRD: 38.1634,
    SSP: 1004.9192,
    STN: 22.2751,
    SYP: 12936.2465,
    SZL: 18.6894,
    THB: 34.8208,
    TJS: 10.914,
    TMT: 3.4999,
    TND: 3.0821,
    TOP: 2.3308,
    TRY: 27.0129,
    TTD: 6.7331,
    TVD: 1.5223,
    TWD: 31.6615,
    TZS: 2487.4759,
    UAH: 36.9276,
    UGX: 3618.3339,
    UYU: 37.9386,
    UZS: 11678.5855,
    VES: 30.9685,
    VND: 23743.0603,
    VUV: 119.6246,
    WST: 2.7379,
    XAF: 596.3885,
    XCD: 2.7,
    XDR: 0.7468,
    XOF: 596.3885,
    XPF: 108.4953,
    YER: 249.997,
    ZAR: 18.6892,
    ZMW: 19.4903,
    ZWL: 4561.5608,
  };

  useEffect(() => {
    fetch("https://openexchangerates.org/api/currencies.json")
    .then((response) => response.json())
    .then((data) => {
      
      setCurrencyList(Object.keys(data));
      setcurrencyfullname(data);
    });
    //eslint-disable-next-line
  }, []);
  
  const handleConvert = useMemo(() => {
    let toCurrency = Tocurrency.split('-')[0]
    let fromCurrency = Fromcurrency.split('-')[0]
    const conversionValues =
      ExchangeRate[toCurrency] / ExchangeRate[fromCurrency];
    return (amount * conversionValues).toFixed(2);
    // eslint-disable-next-line
  }, [amount, Tocurrency, Fromcurrency]);
  const HandleconvertClick = () => {
    const convertedamount = handleConvert;
    setchangeamount(`${convertedamount} ${Tocurrency}`);
  };
  return (
    <div className="container">
      <div className="curr">
        <h2>Currency Converter</h2>
        <div className="curr-item">
          <label htmlFor="amount">Amount:-</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setamount(parseFloat(e.target.value))}
            id="amount"
          />
        </div>
        <div className="curr-item">
          <label htmlFor="fromCurrency">From Currency:-</label>
          <select
            name="fromCurrency"
            id="fromCurrency"
            value={Fromcurrency}
            onChange={(e) => setFromcurrency(e.target.value)}
          >
            <option value="Select Currency">Select Currency</option>
            {CurrencyList.map((currency) => {
              return <option key={currency}>{`${currency}-( ${currencyfullname[currency]} )`}</option>;
            })}
          </select>
        </div>
        <div className="curr-item">
          <label htmlFor="toCurrency">To Currency:-</label>
          <select
            name="toCurrency"
            id="toCurrency"
            value={Tocurrency}
            onChange={(e) => setTocurrecy(e.target.value)}
          >
            <option value="Select Currency">Select Currency</option>
            {CurrencyList.map((currency) => {
              return <option key={currency}>{`${currency}-( ${currencyfullname[currency]} )`}</option>;
            })}
          </select>
        </div>
        {/* <select> 
          {data &&
            data.map((item, index) => {
              return <option key={index}>{item.title}</option>;
            })}
        </select> */}
        <div className="curr-button">
          <button
            type="button"
            className="curr-btn"
            onClick={HandleconvertClick}
          >
            Convert
          </button>
          <h3>Output: {changeamount} </h3>
        </div>
      </div>
    </div>
  );
}
