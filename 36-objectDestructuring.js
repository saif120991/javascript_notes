const band = {
    bandName: "jal the band",
    famousSong:"aadat",
    year:1996,
    month:"september"

}
// console.log(band.bandName);
// console.log(band.famousSong);


let {bandName:var1,famousSong:var2,...restProps} = band;
var1 = "king khan"
console.log(var1);
console.log(var2);
console.log(typeof restProps,restProps);

//by default jis naam ki key hoti hai ussi naam ke variable bante hai