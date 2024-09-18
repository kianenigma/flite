(function() {
    var type_impls = Object.fromEntries([["snowbridge_core",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ConvertLocation%3CAccountId%3E-for-HashedDescription%3CAccountId,+Describe%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/location_conversion.rs.html#148-149\">source</a><a href=\"#impl-ConvertLocation%3CAccountId%3E-for-HashedDescription%3CAccountId,+Describe%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, Describe&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait staging_xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/location_conversion/struct.HashedDescription.html\" title=\"struct staging_xcm_builder::location_conversion::HashedDescription\">HashedDescription</a>&lt;AccountId, Describe&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Describe: <a class=\"trait\" href=\"staging_xcm_builder/location_conversion/trait.DescribeLocation.html\" title=\"trait staging_xcm_builder::location_conversion::DescribeLocation\">DescribeLocation</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.convert_location\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/location_conversion.rs.html#151\">source</a><a href=\"#method.convert_location\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/conversion/trait.ConvertLocation.html#tymethod.convert_location\" class=\"fn\">convert_location</a>(value: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AccountId&gt;</h4></section></summary><div class='docblock'>Convert the <code>location</code> into <code>Some</code> account ID, or <code>None</code> if not possible.</div></details></div></details>","ConvertLocation<AccountId>","snowbridge_core::AgentIdOf"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[2706]}