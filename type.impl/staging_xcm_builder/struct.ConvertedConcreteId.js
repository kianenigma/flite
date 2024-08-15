(function() {var type_impls = {
"staging_xcm_builder":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MatchesFungibles%3CAssetId,+Balance%3E-for-ConvertedConcreteId%3CAssetId,+Balance,+ConvertAssetId,+ConvertBalance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_conversion.rs.html#68-86\">source</a><a href=\"#impl-MatchesFungibles%3CAssetId,+Balance%3E-for-ConvertedConcreteId%3CAssetId,+Balance,+ConvertAssetId,+ConvertBalance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AssetId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, ConvertAssetId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>, AssetId&gt;, ConvertBalance: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>, Balance&gt;&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/token_matching/trait.MatchesFungibles.html\" title=\"trait staging_xcm_executor::traits::token_matching::MatchesFungibles\">MatchesFungibles</a>&lt;AssetId, Balance&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.ConvertedConcreteId.html\" title=\"struct staging_xcm_builder::ConvertedConcreteId\">ConvertedConcreteId</a>&lt;AssetId, Balance, ConvertAssetId, ConvertBalance&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.matches_fungibles\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_conversion.rs.html#76-85\">source</a><a href=\"#method.matches_fungibles\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/token_matching/trait.MatchesFungibles.html#tymethod.matches_fungibles\" class=\"fn\">matches_fungibles</a>(a: &amp;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Asset.html\" title=\"struct staging_xcm_builder::test_utils::Asset\">Asset</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(AssetId, Balance)</a>, <a class=\"enum\" href=\"staging_xcm_executor/traits/token_matching/enum.Error.html\" title=\"enum staging_xcm_executor::traits::token_matching::Error\">MatchError</a>&gt;</h4></section></div></details>","MatchesFungibles<AssetId, Balance>","staging_xcm_builder::asset_conversion::ConvertedConcreteAssetId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MatchesNonFungibles%3CClassId,+InstanceId%3E-for-ConvertedConcreteId%3CClassId,+InstanceId,+ConvertClassId,+ConvertInstanceId%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_conversion.rs.html#87-105\">source</a><a href=\"#impl-MatchesNonFungibles%3CClassId,+InstanceId%3E-for-ConvertedConcreteId%3CClassId,+InstanceId,+ConvertClassId,+ConvertInstanceId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ClassId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, InstanceId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, ConvertClassId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>, ClassId&gt;, ConvertInstanceId: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.AssetInstance.html\" title=\"enum staging_xcm_builder::test_utils::AssetInstance\">AssetInstance</a>, InstanceId&gt;&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/token_matching/trait.MatchesNonFungibles.html\" title=\"trait staging_xcm_executor::traits::token_matching::MatchesNonFungibles\">MatchesNonFungibles</a>&lt;ClassId, InstanceId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.ConvertedConcreteId.html\" title=\"struct staging_xcm_builder::ConvertedConcreteId\">ConvertedConcreteId</a>&lt;ClassId, InstanceId, ConvertClassId, ConvertInstanceId&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.matches_nonfungibles\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_conversion.rs.html#95-104\">source</a><a href=\"#method.matches_nonfungibles\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/token_matching/trait.MatchesNonFungibles.html#tymethod.matches_nonfungibles\" class=\"fn\">matches_nonfungibles</a>(a: &amp;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Asset.html\" title=\"struct staging_xcm_builder::test_utils::Asset\">Asset</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(ClassId, InstanceId)</a>, <a class=\"enum\" href=\"staging_xcm_executor/traits/token_matching/enum.Error.html\" title=\"enum staging_xcm_executor::traits::token_matching::Error\">MatchError</a>&gt;</h4></section></div></details>","MatchesNonFungibles<ClassId, InstanceId>","staging_xcm_builder::asset_conversion::ConvertedConcreteAssetId"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()