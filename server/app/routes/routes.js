

module.exports = function (app) {

  /* ======== Catch-All Route ========*/
  app.get('*', function (req, res) {
    res.sendfile('/public/index.html', {'root': __dirname + '/../../..'});
  });

};