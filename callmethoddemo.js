//call method
const productinfo = {
  productdetails: function (rating, price) {
    return this.pid + " " + this.pname + " " + rating + " " + price;
  },
};
const productdata = {
  pid: 1001,
  pname: "samsung",
};
console.log(productinfo.productdetails.call(productdata, 4, 30000));
