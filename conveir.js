const RATES = {
usd: 0.33,

};

function convert(rub, currency){
 if (!RATES[currency]) {
    return null;
 }

return rub * RATES [currency];

}
