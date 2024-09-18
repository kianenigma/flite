searchState.loadedDescShard("curve25519_dalek", 0, "curve25519-dalek   CI\nVarious constants, such as the Ristretto and Ed25519 …\nGroup operations for Curve25519, in Edwards form.\nScalar multiplication on the Montgomery form of Curve25519.\nAn implementation of Ristretto, which provides a …\nArithmetic on scalars (integers mod the group order).\nModule for common traits.\n<code>BASEPOINT_ORDER</code> is the order of the Ristretto group and of …\nThe Ed25519 basepoint, in <code>CompressedEdwardsY</code> format.\nThe Ed25519 basepoint, as an <code>EdwardsPoint</code>.\nTable containing precomputed multiples of the Ed25519 …\nThe 8-torsion subgroup \\(\\mathcal E [8]\\).\nThe Ristretto basepoint, in <code>CompressedRistretto</code> format.\nThe Ristretto basepoint, as a <code>RistrettoPoint</code>.\nThe Ristretto basepoint, as a <code>RistrettoBasepointTable</code> for …\nThe X25519 basepoint, in <code>MontgomeryPoint</code> format.\nIn “Edwards y” / “Ed25519” format, the curve point …\nA precomputed table of multiples of a basepoint, for …\nA precomputed table of multiples of a basepoint, for …\nA type-alias for <code>EdwardsBasepointTable</code> because the latter …\nA precomputed table of multiples of a basepoint, for …\nA precomputed table of multiples of a basepoint, for …\nA precomputed table of multiples of a basepoint, for …\nAn <code>EdwardsPoint</code> represents a point on the Edwards form of …\nPrecomputation for variable-time multiscalar …\nView this <code>CompressedEdwardsY</code> as an array of bytes.\nGet the basepoint for this table as an <code>EdwardsPoint</code>.\nGet the basepoint for this table as an <code>EdwardsPoint</code>.\nGet the basepoint for this table as an <code>EdwardsPoint</code>.\nGet the basepoint for this table as an <code>EdwardsPoint</code>.\nGet the basepoint for this table as an <code>EdwardsPoint</code>.\nCompress this point to <code>CompressedEdwardsY</code> format.\nCreate a table of precomputed multiples of <code>basepoint</code>.\nCreate a table of precomputed multiples of <code>basepoint</code>.\nCreate a table of precomputed multiples of <code>basepoint</code>.\nCreate a table of precomputed multiples of <code>basepoint</code>.\nCreate a table of precomputed multiples of <code>basepoint</code>.\nAttempt to decompress to an <code>EdwardsPoint</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a <code>CompressedEdwardsY</code> from a slice of bytes.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDetermine if this point is of small order.\nDetermine if this point is “torsion-free”, i.e., is …\nScalar multiplication: compute <code>scalar * self</code>.\nConstruct an <code>EdwardsPoint</code> from a <code>Scalar</code> \\(a\\) by computing …\nConstruct an <code>EdwardsPoint</code> from a <code>Scalar</code> \\(a\\) by computing …\nConstruct an <code>EdwardsPoint</code> from a <code>Scalar</code> \\(a\\) by computing …\nConstruct an <code>EdwardsPoint</code> from a <code>Scalar</code> \\(a\\) by computing …\nConstruct an <code>EdwardsPoint</code> from a <code>Scalar</code> \\(a\\) by computing …\nFixed-base scalar multiplication by the Ed25519 base point.\nThe computation uses Pippeneger’s algorithm, as …\nThe computation uses Pippeneger’s algorithm, as …\nThe computation uses Pippeneger’s algorithm, as …\nThe computation uses Pippeneger’s algorithm, as …\nThe computation uses Pippeneger’s algorithm, as …\nMultiply the basepoint by <code>clamp_integer(bytes)</code>. For a …\nMultiply by the cofactor: return \\([8]P\\).\nMultiply this point by <code>clamp_integer(bytes)</code>. For a …\nMaps the digest of the input bytes to the curve. This is …\nCopy this <code>CompressedEdwardsY</code> to an array of bytes.\nConvert this <code>EdwardsPoint</code> on the Edwards model to the …\nCompute \\(aA + bB\\) in variable time, where \\(B\\) is the …\nReset this <code>CompressedEdwardsY</code> to the compressed form of …\nReset this <code>CompressedEdwardsPoint</code> to the identity element.\nHolds the \\(u\\)-coordinate of a point on the Montgomery …\nView this <code>MontgomeryPoint</code> as an array of bytes.\nReturns the argument unchanged.\nReturn the group identity element, which has order 4.\nCalls <code>U::from(self)</code>.\nGiven <code>self</code> \\( = u_0(P) \\), and a <code>Scalar</code> \\(n\\), return \\( u…\nFixed-base scalar multiplication (i.e. multiplication by …\nMultiply the basepoint by <code>clamp_integer(bytes)</code>. For a …\nGiven <code>self</code> \\( = u_0(P) \\), and a big-endian bit …\nMultiply this point by <code>clamp_integer(bytes)</code>. For a …\nConvert this <code>MontgomeryPoint</code> to an array of bytes.\nAttempt to convert to an <code>EdwardsPoint</code>, using the supplied …\nA Ristretto point, in compressed wire format.\nA precomputed table of multiples of a basepoint, used to …\nA <code>RistrettoPoint</code> represents a point in the Ristretto group …\nPrecomputation for variable-time multiscalar …\nView this <code>CompressedRistretto</code> as an array of bytes.\nGet the basepoint for this table as a <code>RistrettoPoint</code>.\nCompress this point using the Ristretto encoding.\nConditionally select between <code>self</code> and <code>other</code>.\nCreate a precomputed table of multiples of the given …\nTest equality between two <code>RistrettoPoint</code>s.\nAttempt to decompress to an <code>RistrettoPoint</code>.\nDouble-and-compress a batch of points.  The Ristretto …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a <code>RistrettoPoint</code> from an existing <code>Digest</code> …\nConstruct a <code>CompressedRistretto</code> from a slice of bytes.\nConstruct a <code>RistrettoPoint</code> from 64 bytes of data.\nHash a slice of bytes into a <code>RistrettoPoint</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nScalar multiplication: compute <code>scalar * self</code>.\nFixed-base scalar multiplication by the Ristretto base …\nCopy the bytes of this <code>CompressedRistretto</code>.\nCompute \\(aA + bB\\) in variable time, where \\(B\\) is the …\nThe scalar \\( 1 \\).\nThe <code>Scalar</code> struct holds an element of \\(\\mathbb Z / …\nThe scalar \\( 0 \\).\nView the little-endian byte encoding of the integer …\nGiven a slice of nonzero (possibly secret) <code>Scalar</code>s, …\n<em>Clamps</em> the given little-endian representation of a 32-byte …\nReturns the argument unchanged.\nConstruct a scalar from the given <code>u64</code>.\nConstruct a <code>Scalar</code> from the low 255 bits of a 256-bit …\nConstruct a <code>Scalar</code> by reducing a 256-bit little-endian …\nConstruct a <code>Scalar</code> by reducing a 512-bit little-endian …\nAttempt to construct a <code>Scalar</code> from a canonical byte …\nConstruct a scalar from an existing <code>Digest</code> instance.\nHash a slice of bytes into a scalar.\nIndex the bytes of the representative for this <code>Scalar</code>.  …\nCalls <code>U::from(self)</code>.\nGiven a nonzero <code>Scalar</code>, compute its multiplicative inverse.\nConstruct an <code>EdwardsPoint</code> from a <code>Scalar</code> \\(a\\) by computing …\nConstruct an <code>EdwardsPoint</code> from a <code>Scalar</code> \\(a\\) by computing …\nScalar multiplication: compute <code>self * scalar</code>.\nConstruct an <code>EdwardsPoint</code> from a <code>Scalar</code> \\(a\\) by computing …\nConstruct an <code>EdwardsPoint</code> from a <code>Scalar</code> \\(a\\) by computing …\nConstruct an <code>EdwardsPoint</code> from a <code>Scalar</code> \\(a\\) by computing …\nScalar multiplication: compute <code>scalar * self</code>.\nConvert this <code>Scalar</code> to its underlying sequence of bytes.\nA precomputed table of basepoints, for optimising scalar …\nTrait for getting the identity element of a point type.\nTrait for testing if a curve point is equivalent to the …\nA trait for constant-time multiscalar multiplication …\nThe type of point contained within this table.\nThe type of point being multiplied, e.g., <code>RistrettoPoint</code>.\nThe type of point being multiplied, e.g., <code>RistrettoPoint</code>.\nThe type of point to be multiplied, e.g., <code>RistrettoPoint</code>.\nA trait for variable-time multiscalar multiplication …\nA trait for variable-time multiscalar multiplication with …\nRetrieve the original basepoint from this table.\nGenerate a new precomputed basepoint table from the given …\nReturns the identity element of the curve. Can be used as …\nReturn true if this element is the identity element of the …\nMultiply a <code>scalar</code> by this precomputed basepoint table, in …\nMultiply <code>clamp_integer(bytes)</code> by this precomputed …\nGiven an iterator of (possibly secret) scalars and an …\nGiven the static points \\( B_i \\), perform precomputation …\nGiven <code>static_scalars</code>, an iterator of public scalars \\(b_i…\nGiven an iterator of public scalars and an iterator of …\nGiven <code>static_scalars</code>, an iterator of public scalars \\(b_i…\nGiven an iterator of public scalars and an iterator of …\nGiven <code>static_scalars</code>, an iterator of public scalars \\(b_i…")