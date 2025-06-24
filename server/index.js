const bcrypt = require('bcryptjs');

bcrypt.hash("ott@#124", 12, function(err, hash) {
  if (err) throw err;
  console.log("Hashed Password:", hash);
});
