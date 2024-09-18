(function() {
    var type_impls = Object.fromEntries([["staging_xcm",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GetVersion-for-AlwaysV4\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#616-620\">source</a><a href=\"#impl-GetVersion-for-AlwaysV4\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"staging_xcm/trait.GetVersion.html\" title=\"trait staging_xcm::GetVersion\">GetVersion</a> for <a class=\"struct\" href=\"staging_xcm/struct.AlwaysV4.html\" title=\"struct staging_xcm::AlwaysV4\">AlwaysV4</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.get_version_for\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#617-619\">source</a><a href=\"#method.get_version_for\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/trait.GetVersion.html#tymethod.get_version_for\" class=\"fn\">get_version_for</a>(_dest: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.Location.html\" title=\"struct staging_xcm::v4::Location\">Location</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"staging_xcm/type.Version.html\" title=\"type staging_xcm::Version\">Version</a>&gt;</h4></section></div></details>","GetVersion","staging_xcm::AlwaysLatest","staging_xcm::AlwaysLts"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-WrapVersion-for-AlwaysV4\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#608-615\">source</a><a href=\"#impl-WrapVersion-for-AlwaysV4\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"staging_xcm/trait.WrapVersion.html\" title=\"trait staging_xcm::WrapVersion\">WrapVersion</a> for <a class=\"struct\" href=\"staging_xcm/struct.AlwaysV4.html\" title=\"struct staging_xcm::AlwaysV4\">AlwaysV4</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.wrap_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#609-614\">source</a><a href=\"#method.wrap_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/trait.WrapVersion.html#tymethod.wrap_version\" class=\"fn\">wrap_version</a>&lt;Call&gt;(\n    _: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.Location.html\" title=\"struct staging_xcm::v4::Location\">Location</a>,\n    xcm: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"staging_xcm/enum.VersionedXcm.html\" title=\"enum staging_xcm::VersionedXcm\">VersionedXcm</a>&lt;Call&gt;&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"staging_xcm/enum.VersionedXcm.html\" title=\"enum staging_xcm::VersionedXcm\">VersionedXcm</a>&lt;Call&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></div></details>","WrapVersion","staging_xcm::AlwaysLatest","staging_xcm::AlwaysLts"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[3273]}