module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'its a secret'
};

//Secret is a symmetric key that is the algorithm used to sign the JWT so that
//it can be used to encrypt and decrypt the whole key
// whole JWT = Secret + header + payload = hash