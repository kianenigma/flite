searchState.loadedDescShard("ed25519_dalek", 0, "A Rust implementation of ed25519 key generation, signing, …\nSize of an encoded Ed25519 signature in bytes.\nThe length of an “expanded” ed25519 key, …\nThe length of an ed25519 <code>Keypair</code>, in bytes.\nThe length of an ed25519 <code>PublicKey</code>, in bytes.\nThe length of a ed25519 <code>SecretKey</code>, in bytes.\nThe length of a ed25519 <code>Signature</code>, in bytes.\ned25519 secret key as defined in RFC8032 § 5.1.5:\nEd25519 signature.\nErrors which may occur while processing signatures and …\nSign the provided message bytestring using <code>Self</code> (e.g. a …\ned25519 signing key which can be used to produce …\nVerify the provided message bytestring using <code>Self</code> (e.g. a …\nAn ed25519 public key.\nConvert this <code>SigningKey</code> into a <code>SecretKey</code> reference\nView this public key as a byte array.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParse an Ed25519 signature from a byte slice.\nConstruct a <code>SigningKey</code> from a <code>SecretKey</code>\nConstruct a <code>VerifyingKey</code> from a slice of bytes.\nParse an Ed25519 signature from its <code>R</code> and <code>s</code> components.\nConstruct a <code>SigningKey</code> from the bytes of a <code>VerifyingKey</code> …\nParse an Ed25519 signature from a byte slice.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether this is a <em>weak</em> public key, i.e., if this …\nBytes for the <code>R</code> component of a signature.\nBytes for the <code>s</code> component of a signature.\nSign the given message and return a digital signature\nReturn the inner byte array.\nConvert this <code>SigningKey</code> into a <code>SecretKey</code>\nConvert this public key to a byte array.\nConvert this signing key to a 64-byte keypair.\nConvert this verifying key into Montgomery form.\nConvert this signing key into a Curve25519 scalar. This is …\nConvert this signing key into a byte representation of an …\nConvert this signature into a byte vector.\nAttempt to sign the given message, returning a digital …\nSign a message with this signing key’s secret key.\nUse <code>Self</code> to verify that the provided signature for a given …\nVerify a signature on a message with this signing key’s …\nVerify a signature on a message with this signing key’s …\nVerify a signature on a message with this keypair’s …\nStrictly verify a signature on a message with this signing …\nStrictly verify a signature on a message with this keypair…\nGet the <code>VerifyingKey</code> for this <code>SigningKey</code>.")