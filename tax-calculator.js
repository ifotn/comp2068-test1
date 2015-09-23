var http = require('http');
var url = require('url');
var accounting = require('accounting');

http.createServer(function (req, res) {

    var qs = url.parse(req.url, true).query

    var subTotal = parseFloat(qs.subtotal);
    var tax = subTotal * .13;
    var total = subTotal + tax;

    res.write('Sub-Total: ' + accounting.formatMoney(subTotal) + '\n' +
        'Tax: ' + accounting.formatMoney(tax) + '\n' +
        'Total: ' + accounting.formatMoney(total));
    res.end();

}).listen(3000);

console.log('Server started at http://localhost:30000');