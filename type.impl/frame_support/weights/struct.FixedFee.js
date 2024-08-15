(function() {var type_impls = {
"frame_support":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-WeightToFee-for-FixedFee%3CF,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_weights/lib.rs.html#229-231\">source</a><a href=\"#impl-WeightToFee-for-FixedFee%3CF,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const F: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, T&gt; <a class=\"trait\" href=\"frame_support/weights/trait.WeightToFee.html\" title=\"trait frame_support::weights::WeightToFee\">WeightToFee</a> for <a class=\"struct\" href=\"frame_support/weights/struct.FixedFee.html\" title=\"struct frame_support::weights::FixedFee\">FixedFee</a>&lt;F, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"sp_arithmetic/traits/trait.BaseArithmetic.html\" title=\"trait sp_arithmetic::traits::BaseArithmetic\">BaseArithmetic</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"num_traits/sign/trait.Unsigned.html\" title=\"trait num_traits::sign::Unsigned\">Unsigned</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Balance\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Balance\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"frame_support/weights/trait.WeightToFee.html#associatedtype.Balance\" class=\"associatedtype\">Balance</a> = T</h4></section></summary><div class='docblock'>The type that is returned as result from calculation.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.weight_to_fee\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_weights/lib.rs.html#235\">source</a><a href=\"#method.weight_to_fee\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/weights/trait.WeightToFee.html#tymethod.weight_to_fee\" class=\"fn\">weight_to_fee</a>(_: &amp;<a class=\"struct\" href=\"frame_support/pallet_prelude/struct.Weight.html\" title=\"struct frame_support::pallet_prelude::Weight\">Weight</a>) -&gt; &lt;<a class=\"struct\" href=\"frame_support/weights/struct.FixedFee.html\" title=\"struct frame_support::weights::FixedFee\">FixedFee</a>&lt;F, T&gt; as <a class=\"trait\" href=\"frame_support/weights/trait.WeightToFee.html\" title=\"trait frame_support::weights::WeightToFee\">WeightToFee</a>&gt;::<a class=\"associatedtype\" href=\"frame_support/weights/trait.WeightToFee.html#associatedtype.Balance\" title=\"type frame_support::weights::WeightToFee::Balance\">Balance</a></h4></section></summary><div class='docblock'>Calculates the fee from the passed <code>weight</code>.</div></details></div></details>","WeightToFee","frame_support::weights::NoFee"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()