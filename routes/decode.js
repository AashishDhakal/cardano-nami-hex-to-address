var express = require('express');
var router = express.Router();
var cardano = require('@emurgo/cardano-serialization-lib-nodejs');

/* Decode text. */
router.get('/:cborHex', function(req, res, next) {
  var cborHex = req.params.cborHex;
  res.send(cardano.Address.from_bytes(Buffer.from(cborHex, "hex")).to_bech32());
});

module.exports = router;
