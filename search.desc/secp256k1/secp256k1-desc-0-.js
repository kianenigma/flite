searchState.loadedDescShard("secp256k1", 0, "Rust bindings for Pieter Wuille’s secp256k1 library, …\nRepresents the set of all capabilities.\nRepresents the set of all capabilities (preallocated …\nA trait for all kinds of contexts that lets you define the …\nA constant description of the context.\nThe main error type for this library.\nEven parity.\nFlags for the ffi.\nSignature failed verification.\nBad EllSwift value\nBad sized message (“messages” are actually fixed-sized …\nError returned when conversion from an integer to <code>Parity</code> …\nThe only valid parity values are 0 or 1.\nBad public key.\nBad set of public keys.\nBad recovery id.\nBad secret key.\nBad shared secret.\nBad signature.\nTried to add/multiply by an invalid tweak.\nOpaque data structure that holds a keypair consisting of a …\nA (hashed) message input to an ECDSA signature.\nDidn’t pass enough memory to context creation with …\nOdd parity.\nRepresents the parity passed between FFI function calls.\nTrait marking that a particular context object internally …\nPublic key - used to verify ECDSA signatures and to do …\nPublic key - used to verify ECDSA signatures and to do …\nA global static context to avoid repeatedly creating …\nThe secp256k1 engine, used to execute all signature …\nSecret key - a 256-bit key used to create ECDSA and …\nSecret key - a 256-bit key used to create ECDSA and …\nRepresents the set of capabilities needed for signing.\nRepresents the set of capabilities needed for signing …\nMarker trait for indicating that an instance of <code>Secp256k1</code> …\nTrait describing something that promises to be a 32-byte …\nMarker trait for indicating that an instance of <code>Secp256k1</code> …\nRepresents the set of capabilities needed for verification.\nRepresents the set of capabilities needed for verification …\nAn x-only public key, used for verification of Taproot …\nTweaks a <code>PublicKey</code> by adding <code>tweak * G</code> modulo the curve …\nTweaks a <code>SecretKey</code> by adding <code>tweak</code> modulo the curve order.\nTweaks an <code>XOnlyPublicKey</code> by adding the generator …\nTweaks a keypair by first converting the public key to an …\nObtains a const pointer suitable for use with FFI …\nObtains a mutable pointer suitable for use with FFI …\nObtains a raw mutable pointer suitable for use with FFI …\nObtains a raw mutable pointer suitable for use with FFI …\nObtains a raw mutable pointer suitable for use with FFI …\nObtains a raw const pointer suitable for use with FFI …\nObtains a raw const pointer suitable for use with FFI …\nObtains a raw const pointer suitable for use with FFI …\nGets a reference to the underlying array.\nGets a reference to the underlying array\nLike <code>cmp::Cmp</code> but faster and with no guarantees across …\nLike <code>cmp::Cmp</code> but faster and with no guarantees across …\nLike <code>cmp::Cmp</code> but faster and with no guarantees across …\nAdds a second key to this one, returning the sum.\nAdds the keys in the provided slice together, returning …\nConstants related to the API and the underlying curve.\nGetter for the raw pointer to the underlying secp256k1 …\nA function to deallocate the memory when the context is …\nFormats the explicit byte value of the secret key kept …\nFormats the explicit byte value of the secret key kept …\nSupport for shared secret computations.\nStructs and functionality related to the ECDSA signature …\nThis module provides an implementation of ElligatorSwift …\nThis implementation is designed to be constant time to …\nLike <code>cmp::Eq</code> but faster and with no guarantees across …\nLike <code>cmp::Eq</code> but faster and with no guarantees across …\nLike <code>cmp::Eq</code> but faster and with no guarantees across …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a 32-byte hash directly to a message without …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a <code>Message</code> from a <code>digest</code>.\nCreates a <code>Message</code> from a 32 byte slice <code>digest</code>.\nCreates a new public key from an <code>ElligatorSwift</code>.\nConstructs a <code>Parity</code> from a signed integer.\nCreates a new secret key using data from BIP-340 <code>Keypair</code>.\nCreates a new compressed public key using data from …\nReturns the <code>XOnlyPublicKey</code> (and it’s <code>Parity</code>) for <code>keypair</code>.\nCreates a context from a raw context.\nCreates a context from a raw context that can only be used …\nCreates a context from a raw context that can only be used …\nCreates a <code>Keypair</code> directly from a secret key slice.\nCreates a <code>Keypair</code> directly from a secret key string.\nCreates a <code>Keypair</code> directly from a secret key string and …\nCreates a new public key from a <code>SecretKey</code>.\nCreates a <code>Keypair</code> directly from a Secp256k1 secret key.\nCreates a new public key from a <code>SecretKey</code> and the global …\nConverts a <code>SECRET_KEY_SIZE</code>-byte slice to a secret key.\nCreates a public key directly from a slice.\nCreates a schnorr public key directly from a slice.\n<strong>If you just want to sign an arbitrary message use </strong>…\nConstructs a <code>Parity</code> from a byte.\nCreates a <code>PublicKey</code> using the key material from <code>pk</code> …\nLets you create a context in a generic manner …\nModule implementing a singleton pattern for a global …\nImplement methods and traits for types that contain an …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts the object into a 32-byte array\nReturns the <code>Keypair</code> for this <code>SecretKey</code>.\nTweaks a <code>SecretKey</code> by multiplying by <code>tweak</code> modulo the …\nTweaks a <code>PublicKey</code> by multiplying by <code>tweak</code> modulo the …\nNegates the secret key.\nNegates the public key.\nCreates a new Secp256k1 context with all capabilities.\nAttempts to erase the contents of the underlying array.\nAttempts to erase the secret within the underlying array.\nUses the ffi <code>secp256k1_context_preallocated_size</code> to check …\nUses the ffi <code>secp256k1_context_preallocated_size</code> to check …\nReturns the required memory for a preallocated context …\nUses the ffi <code>secp256k1_context_preallocated_size</code> to check …\nLets you create a context with a preallocated buffer in a …\nCreates a new Secp256k1 context with all capabilities.\nCreates a new Secp256k1 context that can only be used for …\nCreates a new Secp256k1 context that can only be used for …\nReturns the <code>PublicKey</code> for this <code>SecretKey</code>.\nReturns the <code>PublicKey</code> for this <code>Keypair</code>.\nReturns the <code>PublicKey</code> for this <code>XOnlyPublicKey</code>.\nDetermines the public key for which <code>sig</code> is a valid …\nProvides <code>Scalar</code> and related types.\nSupport for schnorr signatures.\nReturns the secret key as a byte value.\nReturns the secret bytes for this key pair.\nReturns the <code>SecretKey</code> for this <code>Keypair</code>.\n(Re)randomizes the Secp256k1 context for extra sidechannel …\nSerializes the key as a byte-encoded pair of values. In …\nSerializes the key as a byte-encoded x coordinate value …\nSerializes the key as a byte-encoded pair of values, in …\nConstructs a signature for <code>msg</code> using the secret key <code>sk</code> and …\nConstructs an ECDSA signature for <code>msg</code> using the global …\nConstructs a signature for <code>msg</code> using the secret key <code>sk</code>, …\nConstructs a signature for <code>msg</code> using the secret key <code>sk</code>, …\nConstructs a signature for <code>msg</code> using the secret key <code>sk</code> and …\nConstructs a signature for <code>msg</code> using the secret key <code>sk</code> and …\nConstructs a signature for <code>msg</code> using the secret key <code>sk</code> and …\nCreates a schnorr signature without using any auxiliary …\nCreates a schnorr signature using the given auxiliary …\nCreates a new Secp256k1 context that can only be used for …\nConverts parity into an integer value.\nConverts parity into an integer (byte) value.\nVerifies that a tweak produced by <code>XOnlyPublicKey::add_tweak</code>…\nCreates a new Secp256k1 context that can only be used for …\nChecks that <code>sig</code> is a valid ECDSA signature for <code>msg</code> using …\nChecks that <code>sig</code> is a valid schnorr signature for <code>msg</code> using …\nChecks that <code>sig</code> is a valid ECDSA signature for <code>msg</code> using …\nVerifies a schnorr signature.\nReturns the <code>XOnlyPublicKey</code> (and it’s <code>Parity</code>) for this …\nReturns the <code>XOnlyPublicKey</code> (and it’s <code>Parity</code>) for this …\nReturns the <code>XOnlyPublicKey</code> (and it’s <code>Parity</code>) for this …\nThe maximum size of a compact signature.\nThe order of the secp256k1 curve.\nThe size of a full ElligatorSwift encoding.\nThe Prime for the secp256k1 field element.\nThe X coordinate of the generator.\nThe Y coordinate of the generator.\nThe size of a key pair.\nThe maximum size of a signature.\nThe size (in bytes) of a message.\nThe value one as big-endian array of bytes.\nThe size (in bytes) of a serialized public key.\nThe size of a schnorr public key.\nThe size of a schnorr signature.\nThe size (in bytes) of a secret key.\nThe size (in bytes) of an serialized uncompressed public …\nThe value zero as an array of bytes.\nEnables two parties to create a shared secret without …\nFormats the explicit byte value of the shared secret kept …\nReturns the argument unchanged.\nCreates a shared secret from <code>bytes</code> array.\nCreates a shared secret from <code>bytes</code> slice.\nCalls <code>U::from(self)</code>.\nCreates a new shared secret from a pubkey and secret key.\nAttempts to erase the contents of the underlying array.\nReturns the shared secret as a byte value.\nCreates a shared point from public key and secret key.\nAn ECDSA signature with a recovery ID for pubkey recovery.\nA tag used for recovering the public key from a compact …\nAn ECDSA signature\nObtains a raw mutable pointer suitable for use with FFI …\nObtains a raw mutable pointer suitable for use with FFI …\nObtains a raw pointer suitable for use with FFI functions.\nObtains a raw pointer suitable for use with FFI functions\nLike <code>cmp::Cmp</code> but faster and with no guarantees across …\nLike <code>cmp::Eq</code> but faster and with no guarantees across …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a compact-encoded byte slice to a signature. This …\nConverts a 64-byte compact-encoded byte slice to a …\nConverts a DER-encoded byte slice to a signature\nConverts a “lax DER”-encoded byte slice to a …\nAllows library users to create valid recovery IDs from i32.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNormalizes a signature to a “low S” form. In ECDSA, …\nDetermines the public key for which this <code>Signature</code> is …\nSerializes the recoverable signature in compact format.\nSerializes the signature in compact format\nSerializes the signature in DER format\nImplements <code>SerializedSignature</code> and related types.\nAllows library users to convert recovery IDs to i32.\nConverts a recoverable signature to a non-recoverable one …\nVerifies an ECDSA signature for <code>msg</code> using <code>pk</code> and the …\nOwned iterator over the bytes of <code>SerializedSignature</code>\nA DER serialized Signature\nReturns the remaining bytes as a slice.\nGet the capacity of the underlying data buffer.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a SerializedSignature from a Signature. (this DER …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck if the space is zero.\nGet the len of the used data.\nConvert the serialized signature into the Signature struct.\nWe are the initiator of the ECDH\nWe are the responder of the ECDH\n<code>ElligatorSwift</code> is an encoding of a uniformly chosen point …\nRepresents which party we are in the ECDH, A is the …\nThe result of <code>ElligatorSwift::shared_secret</code>, which is a …\nReturns the secret bytes as a reference to an array.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates an <code>ElligatorSwift</code> object from a 64-byte array.\nComputes the <code>ElligatorSwift</code> encoding for a valid public key\nCreates the Elligator Swift encoding from a secret key, …\nCreates shared secret from bytes.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new <code>ElligatorSwift</code> object from a 64-byte array.\nComputes a shared secret only known by Alice and Bob. This …\nComputes a shared secret, just like <code>shared_secret</code>, but …\nReturns the 64-byte array representation of this …\nReturns the secret bytes as an array.\nProxy struct for global <code>SECP256K1</code> context.\nA global static context to avoid repeatedly creating …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nMaximum valid value: <code>curve_order - 1</code>\nScalar representing <code>1</code>\nError returned when the value of scalar is invalid - …\nPositive 256-bit integer guaranteed to be less than the …\nScalar representing <code>0</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nTries to deserialize from big endian bytes\nTries to deserialize from little endian bytes\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAttempts to erase the contents of the underlying array.\nSerializes to big endian bytes\nSerializes to little endian bytes\nRepresents a schnorr signature.\nGets a reference to the underlying array\nReturns the argument unchanged.\nCreates a <code>Signature</code> directly from a slice.\nCalls <code>U::from(self)</code>.\nReturns a signature as a byte array.\nVerifies a schnorr signature for <code>msg</code> using <code>pk</code> and the …")