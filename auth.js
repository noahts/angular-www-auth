/**
 * Created by noah on 14/9/15.
 */

var auth = require('basic-auth');

var admins = {
  'noah': { password: 'pas' },
};


module.exports = function(req, res, next) {

  var user = auth(req);
  if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
    res.set('WWW-Authenticate', 'Basic realm="NTS"');
    return res.status(401).send();
  }
  res.status(200);
  return next();
};

