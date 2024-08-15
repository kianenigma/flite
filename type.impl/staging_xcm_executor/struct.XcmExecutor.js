(function() {var type_impls = {
"pallet_xcm_benchmarks":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ExecuteXcm%3C%3CConfig+as+Config%3E::RuntimeCall%3E-for-XcmExecutor%3CConfig%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_executor/lib.rs.html#197\">source</a><a href=\"#impl-ExecuteXcm%3C%3CConfig+as+Config%3E::RuntimeCall%3E-for-XcmExecutor%3CConfig%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Config&gt; <a class=\"trait\" href=\"staging_xcm/v4/traits/trait.ExecuteXcm.html\" title=\"trait staging_xcm::v4::traits::ExecuteXcm\">ExecuteXcm</a>&lt;&lt;Config as <a class=\"trait\" href=\"staging_xcm_executor/config/trait.Config.html\" title=\"trait staging_xcm_executor::config::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"staging_xcm_executor/config/trait.Config.html#associatedtype.RuntimeCall\" title=\"type staging_xcm_executor::config::Config::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"staging_xcm_executor/struct.XcmExecutor.html\" title=\"struct staging_xcm_executor::XcmExecutor\">XcmExecutor</a>&lt;Config&gt;<div class=\"where\">where\n    Config: <a class=\"trait\" href=\"staging_xcm_executor/config/trait.Config.html\" title=\"trait staging_xcm_executor::config::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Prepared\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Prepared\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"staging_xcm/v4/traits/trait.ExecuteXcm.html#associatedtype.Prepared\" class=\"associatedtype\">Prepared</a> = <a class=\"struct\" href=\"staging_xcm_executor/struct.WeighedMessage.html\" title=\"struct staging_xcm_executor::WeighedMessage\">WeighedMessage</a>&lt;&lt;Config as <a class=\"trait\" href=\"staging_xcm_executor/config/trait.Config.html\" title=\"trait staging_xcm_executor::config::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"staging_xcm_executor/config/trait.Config.html#associatedtype.RuntimeCall\" title=\"type staging_xcm_executor::config::Config::RuntimeCall\">RuntimeCall</a>&gt;</h4></section><section id=\"method.prepare\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_executor/lib.rs.html#199-201\">source</a><a href=\"#method.prepare\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/v4/traits/trait.ExecuteXcm.html#tymethod.prepare\" class=\"fn\">prepare</a>(\n    message: <a class=\"struct\" href=\"staging_xcm/v4/struct.Xcm.html\" title=\"struct staging_xcm::v4::Xcm\">Xcm</a>&lt;&lt;Config as <a class=\"trait\" href=\"staging_xcm_executor/config/trait.Config.html\" title=\"trait staging_xcm_executor::config::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"staging_xcm_executor/config/trait.Config.html#associatedtype.RuntimeCall\" title=\"type staging_xcm_executor::config::Config::RuntimeCall\">RuntimeCall</a>&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;<a class=\"struct\" href=\"staging_xcm_executor/struct.XcmExecutor.html\" title=\"struct staging_xcm_executor::XcmExecutor\">XcmExecutor</a>&lt;Config&gt; as <a class=\"trait\" href=\"staging_xcm/v4/traits/trait.ExecuteXcm.html\" title=\"trait staging_xcm::v4::traits::ExecuteXcm\">ExecuteXcm</a>&lt;&lt;Config as <a class=\"trait\" href=\"staging_xcm_executor/config/trait.Config.html\" title=\"trait staging_xcm_executor::config::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"staging_xcm_executor/config/trait.Config.html#associatedtype.RuntimeCall\" title=\"type staging_xcm_executor::config::Config::RuntimeCall\">RuntimeCall</a>&gt;&gt;::<a class=\"associatedtype\" href=\"staging_xcm/v4/traits/trait.ExecuteXcm.html#associatedtype.Prepared\" title=\"type staging_xcm::v4::traits::ExecuteXcm::Prepared\">Prepared</a>, <a class=\"struct\" href=\"staging_xcm/v4/struct.Xcm.html\" title=\"struct staging_xcm::v4::Xcm\">Xcm</a>&lt;&lt;Config as <a class=\"trait\" href=\"staging_xcm_executor/config/trait.Config.html\" title=\"trait staging_xcm_executor::config::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"staging_xcm_executor/config/trait.Config.html#associatedtype.RuntimeCall\" title=\"type staging_xcm_executor::config::Config::RuntimeCall\">RuntimeCall</a>&gt;&gt;</h4></section><section id=\"method.execute\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_executor/lib.rs.html#207-212\">source</a><a href=\"#method.execute\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/v4/traits/trait.ExecuteXcm.html#tymethod.execute\" class=\"fn\">execute</a>(\n    origin: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    _: <a class=\"struct\" href=\"staging_xcm_executor/struct.WeighedMessage.html\" title=\"struct staging_xcm_executor::WeighedMessage\">WeighedMessage</a>&lt;&lt;Config as <a class=\"trait\" href=\"staging_xcm_executor/config/trait.Config.html\" title=\"trait staging_xcm_executor::config::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"staging_xcm_executor/config/trait.Config.html#associatedtype.RuntimeCall\" title=\"type staging_xcm_executor::config::Config::RuntimeCall\">RuntimeCall</a>&gt;,\n    id: &amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">32</a>],\n    weight_credit: <a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>,\n) -&gt; <a class=\"enum\" href=\"staging_xcm/v4/traits/enum.Outcome.html\" title=\"enum staging_xcm::v4::traits::Outcome\">Outcome</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.charge_fees\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_executor/lib.rs.html#266\">source</a><a href=\"#method.charge_fees\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/v4/traits/trait.ExecuteXcm.html#tymethod.charge_fees\" class=\"fn\">charge_fees</a>(origin: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;, fees: <a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Deduct some <code>fees</code> to the sovereign account of the given <code>location</code> and place them as per\nthe convention for fees.</div></details><section id=\"method.prepare_and_execute\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/traits.rs.html#85-91\">source</a><a href=\"#method.prepare_and_execute\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/v4/traits/trait.ExecuteXcm.html#method.prepare_and_execute\" class=\"fn\">prepare_and_execute</a>(\n    origin: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    message: <a class=\"struct\" href=\"staging_xcm/v4/struct.Xcm.html\" title=\"struct staging_xcm::v4::Xcm\">Xcm</a>&lt;Call&gt;,\n    id: &amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">32</a>],\n    weight_limit: <a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>,\n    weight_credit: <a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>,\n) -&gt; <a class=\"enum\" href=\"staging_xcm/v4/traits/enum.Outcome.html\" title=\"enum staging_xcm::v4::traits::Outcome\">Outcome</a></h4></section></div></details>","ExecuteXcm<<Config as Config>::RuntimeCall>","pallet_xcm_benchmarks::ExecutorOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-XcmAssetTransfers-for-XcmExecutor%3CConfig%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_executor/lib.rs.html#278\">source</a><a href=\"#impl-XcmAssetTransfers-for-XcmExecutor%3CConfig%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Config&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/asset_transfer/trait.XcmAssetTransfers.html\" title=\"trait staging_xcm_executor::traits::asset_transfer::XcmAssetTransfers\">XcmAssetTransfers</a> for <a class=\"struct\" href=\"staging_xcm_executor/struct.XcmExecutor.html\" title=\"struct staging_xcm_executor::XcmExecutor\">XcmExecutor</a>&lt;Config&gt;<div class=\"where\">where\n    Config: <a class=\"trait\" href=\"staging_xcm_executor/config/trait.Config.html\" title=\"trait staging_xcm_executor::config::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.IsReserve\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IsReserve\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"staging_xcm_executor/traits/asset_transfer/trait.XcmAssetTransfers.html#associatedtype.IsReserve\" class=\"associatedtype\">IsReserve</a> = &lt;Config as <a class=\"trait\" href=\"staging_xcm_executor/config/trait.Config.html\" title=\"trait staging_xcm_executor::config::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"staging_xcm_executor/config/trait.Config.html#associatedtype.IsReserve\" title=\"type staging_xcm_executor::config::Config::IsReserve\">IsReserve</a></h4></section></summary><div class='docblock'>Combinations of (Asset, Location) pairs which we trust as reserves. Meaning\nreserve-based-transfers are to be used for assets matching this filter.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.IsTeleporter\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IsTeleporter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"staging_xcm_executor/traits/asset_transfer/trait.XcmAssetTransfers.html#associatedtype.IsTeleporter\" class=\"associatedtype\">IsTeleporter</a> = &lt;Config as <a class=\"trait\" href=\"staging_xcm_executor/config/trait.Config.html\" title=\"trait staging_xcm_executor::config::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"staging_xcm_executor/config/trait.Config.html#associatedtype.IsTeleporter\" title=\"type staging_xcm_executor::config::Config::IsTeleporter\">IsTeleporter</a></h4></section></summary><div class='docblock'>Combinations of (Asset, Location) pairs which we trust as teleporters. Meaning teleports are\nto be used for assets matching this filter.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.AssetTransactor\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.AssetTransactor\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"staging_xcm_executor/traits/asset_transfer/trait.XcmAssetTransfers.html#associatedtype.AssetTransactor\" class=\"associatedtype\">AssetTransactor</a> = &lt;Config as <a class=\"trait\" href=\"staging_xcm_executor/config/trait.Config.html\" title=\"trait staging_xcm_executor::config::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"staging_xcm_executor/config/trait.Config.html#associatedtype.AssetTransactor\" title=\"type staging_xcm_executor::config::Config::AssetTransactor\">AssetTransactor</a></h4></section></summary><div class='docblock'>How to withdraw and deposit an asset.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.determine_for\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_executor/traits/asset_transfer.rs.html#58\">source</a><a href=\"#method.determine_for\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/asset_transfer/trait.XcmAssetTransfers.html#method.determine_for\" class=\"fn\">determine_for</a>(asset: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, dest: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"staging_xcm_executor/traits/asset_transfer/enum.TransferType.html\" title=\"enum staging_xcm_executor::traits::asset_transfer::TransferType\">TransferType</a>, <a class=\"enum\" href=\"staging_xcm_executor/traits/asset_transfer/enum.Error.html\" title=\"enum staging_xcm_executor::traits::asset_transfer::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Determine transfer type to be used for transferring <code>asset</code> from local chain to <code>dest</code>.</div></details></div></details>","XcmAssetTransfers","pallet_xcm_benchmarks::ExecutorOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-XcmExecutor%3CConfig%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_executor/lib.rs.html#304\">source</a><a href=\"#impl-XcmExecutor%3CConfig%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Config&gt; <a class=\"struct\" href=\"staging_xcm_executor/struct.XcmExecutor.html\" title=\"struct staging_xcm_executor::XcmExecutor\">XcmExecutor</a>&lt;Config&gt;<div class=\"where\">where\n    Config: <a class=\"trait\" href=\"staging_xcm_executor/config/trait.Config.html\" title=\"trait staging_xcm_executor::config::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm_executor/lib.rs.html#305\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm_executor/struct.XcmExecutor.html#tymethod.new\" class=\"fn\">new</a>(\n    origin: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    message_id: [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">32</a>],\n) -&gt; <a class=\"struct\" href=\"staging_xcm_executor/struct.XcmExecutor.html\" title=\"struct staging_xcm_executor::XcmExecutor\">XcmExecutor</a>&lt;Config&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.post_process\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm_executor/lib.rs.html#329\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm_executor/struct.XcmExecutor.html#tymethod.post_process\" class=\"fn\">post_process</a>(self, xcm_weight: <a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>) -&gt; <a class=\"enum\" href=\"staging_xcm/v4/traits/enum.Outcome.html\" title=\"enum staging_xcm::v4::traits::Outcome\">Outcome</a></h4></section></summary><div class=\"docblock\"><p>Execute any final operations after having executed the XCM message.\nThis includes refunding surplus weight, trapping extra holding funds, and returning any\nerrors during execution.</p>\n</div></details></div></details>",0,"pallet_xcm_benchmarks::ExecutorOf"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()