(function() {
    var implementors = Object.fromEntries([["ecdsa",[["impl&lt;C&gt; <a class=\"trait\" href=\"signature/keypair/trait.KeypairRef.html\" title=\"trait signature::keypair::KeypairRef\">KeypairRef</a> for <a class=\"struct\" href=\"ecdsa/struct.SigningKey.html\" title=\"struct ecdsa::SigningKey\">SigningKey</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"ecdsa/trait.PrimeCurve.html\" title=\"trait ecdsa::PrimeCurve\">PrimeCurve</a> + <a class=\"trait\" href=\"elliptic_curve/arithmetic/trait.CurveArithmetic.html\" title=\"trait elliptic_curve::arithmetic::CurveArithmetic\">CurveArithmetic</a>,\n    <a class=\"type\" href=\"elliptic_curve/scalar/type.Scalar.html\" title=\"type elliptic_curve::scalar::Scalar\">Scalar</a>&lt;C&gt;: <a class=\"trait\" href=\"elliptic_curve/ops/trait.Invert.html\" title=\"trait elliptic_curve::ops::Invert\">Invert</a>&lt;Output = <a class=\"struct\" href=\"subtle/struct.CtOption.html\" title=\"struct subtle::CtOption\">CtOption</a>&lt;<a class=\"type\" href=\"elliptic_curve/scalar/type.Scalar.html\" title=\"type elliptic_curve::scalar::Scalar\">Scalar</a>&lt;C&gt;&gt;&gt; + <a class=\"trait\" href=\"ecdsa/hazmat/trait.SignPrimitive.html\" title=\"trait ecdsa::hazmat::SignPrimitive\">SignPrimitive</a>&lt;C&gt;,\n    <a class=\"type\" href=\"ecdsa/type.SignatureSize.html\" title=\"type ecdsa::SignatureSize\">SignatureSize</a>&lt;C&gt;: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,</div>"]]],["ed25519_dalek",[["impl <a class=\"trait\" href=\"signature/keypair/trait.KeypairRef.html\" title=\"trait signature::keypair::KeypairRef\">KeypairRef</a> for <a class=\"struct\" href=\"ed25519_dalek/struct.SigningKey.html\" title=\"struct ed25519_dalek::SigningKey\">SigningKey</a>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[1600,287]}