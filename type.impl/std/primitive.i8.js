(function() {
    var type_impls = Object.fromEntries([["parity_util_mem",[]],["secp256k1_sys",[]],["serde",[]],["ssz_rs",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[22,21,13,14]}