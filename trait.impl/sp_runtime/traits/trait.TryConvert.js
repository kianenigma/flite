(function() {var implementors = {
"pallet_asset_conversion":[["impl&lt;PoolId, AccountId&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;PoolId</a>, AccountId&gt; for <a class=\"struct\" href=\"pallet_asset_conversion/struct.AccountIdConverterNoSeed.html\" title=\"struct pallet_asset_conversion::AccountIdConverterNoSeed\">AccountIdConverterNoSeed</a>&lt;PoolId&gt;<div class=\"where\">where\n    PoolId: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Encode.html\" title=\"trait parity_scale_codec::codec::Encode\">Encode</a>,\n    AccountId: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Decode.html\" title=\"trait parity_scale_codec::codec::Decode\">Decode</a>,</div>"],["impl&lt;Seed, PoolId, AccountId&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;PoolId</a>, AccountId&gt; for <a class=\"struct\" href=\"pallet_asset_conversion/struct.AccountIdConverter.html\" title=\"struct pallet_asset_conversion::AccountIdConverter\">AccountIdConverter</a>&lt;Seed, PoolId&gt;<div class=\"where\">where\n    PoolId: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Encode.html\" title=\"trait parity_scale_codec::codec::Encode\">Encode</a>,\n    AccountId: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Decode.html\" title=\"trait parity_scale_codec::codec::Decode\">Decode</a>,\n    Seed: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;<a class=\"struct\" href=\"frame_support/struct.PalletId.html\" title=\"struct frame_support::PalletId\">PalletId</a>&gt;,</div>"]],
"polkadot_runtime_common":[["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;&amp;<a class=\"enum\" href=\"staging_xcm/enum.VersionedLocation.html\" title=\"enum staging_xcm::VersionedLocation\">VersionedLocation</a>, <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt; for <a class=\"struct\" href=\"polkadot_runtime_common/impls/struct.VersionedLocationConverter.html\" title=\"struct polkadot_runtime_common::impls::VersionedLocationConverter\">VersionedLocationConverter</a>"],["impl <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;<a class=\"enum\" href=\"polkadot_runtime_common/impls/enum.VersionedLocatableAsset.html\" title=\"enum polkadot_runtime_common::impls::VersionedLocatableAsset\">VersionedLocatableAsset</a>, <a class=\"struct\" href=\"staging_xcm_builder/pay/struct.LocatableAssetId.html\" title=\"struct staging_xcm_builder::pay::LocatableAssetId\">LocatableAssetId</a>&gt; for <a class=\"struct\" href=\"polkadot_runtime_common/impls/struct.LocatableAssetConverter.html\" title=\"struct polkadot_runtime_common::impls::LocatableAssetConverter\">LocatableAssetConverter</a>"]],
"polkadot_sdk_frame":[],
"sp_runtime":[],
"staging_xcm_builder":[["impl&lt;'a, Network: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.NetworkId.html\" title=\"enum staging_xcm_builder::test_utils::NetworkId\">NetworkId</a>&gt;&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">32</a>]&gt;&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a AccountId</a>, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.AliasesIntoAccountId32.html\" title=\"struct staging_xcm_builder::AliasesIntoAccountId32\">AliasesIntoAccountId32</a>&lt;Network, AccountId&gt;"],["impl&lt;FixedLocationValue: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt;, AssetKind: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.AssetId.html\" title=\"struct staging_xcm_builder::test_utils::AssetId\">AssetId</a>&gt;&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;AssetKind, <a class=\"struct\" href=\"staging_xcm_builder/struct.LocatableAssetId.html\" title=\"struct staging_xcm_builder::LocatableAssetId\">LocatableAssetId</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.FixedLocation.html\" title=\"struct staging_xcm_builder::FixedLocation\">FixedLocation</a>&lt;FixedLocationValue&gt;"],["impl&lt;RuntimeOrigin: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">32</a>]&gt;, Network: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.NetworkId.html\" title=\"enum staging_xcm_builder::test_utils::NetworkId\">NetworkId</a>&gt;&gt;&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;RuntimeOrigin, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.SignedToAccountId32.html\" title=\"struct staging_xcm_builder::SignedToAccountId32\">SignedToAccountId32</a>&lt;RuntimeOrigin, AccountId, Network&gt;<div class=\"where\">where\n    RuntimeOrigin::<a class=\"associatedtype\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html#associatedtype.PalletsOrigin\" title=\"type frame_support::traits::dispatch::OriginTrait::PalletsOrigin\">PalletsOrigin</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"frame_support/dispatch/enum.RawOrigin.html\" title=\"enum frame_support::dispatch::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"enum\" href=\"frame_support/dispatch/enum.RawOrigin.html\" title=\"enum frame_support::dispatch::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;, Error = RuntimeOrigin::<a class=\"associatedtype\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html#associatedtype.PalletsOrigin\" title=\"type frame_support::traits::dispatch::OriginTrait::PalletsOrigin\">PalletsOrigin</a>&gt;,</div>"],["impl&lt;RuntimeOrigin: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html\" title=\"trait frame_support::traits::dispatch::OriginTrait\">OriginTrait</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, COrigin: <a class=\"trait\" href=\"frame_support/traits/misc/trait.GetBacking.html\" title=\"trait frame_support::traits::misc::GetBacking\">GetBacking</a>, Body: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.BodyId.html\" title=\"enum staging_xcm_builder::test_utils::BodyId\">BodyId</a>&gt;&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;RuntimeOrigin, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.BackingToPlurality.html\" title=\"struct staging_xcm_builder::BackingToPlurality\">BackingToPlurality</a>&lt;RuntimeOrigin, COrigin, Body&gt;<div class=\"where\">where\n    RuntimeOrigin::<a class=\"associatedtype\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html#associatedtype.PalletsOrigin\" title=\"type frame_support::traits::dispatch::OriginTrait::PalletsOrigin\">PalletsOrigin</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;COrigin&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;COrigin, Error = RuntimeOrigin::<a class=\"associatedtype\" href=\"frame_support/traits/dispatch/trait.OriginTrait.html#associatedtype.PalletsOrigin\" title=\"type frame_support::traits::dispatch::OriginTrait::PalletsOrigin\">PalletsOrigin</a>&gt;,</div>"],["impl&lt;RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, EnsureBodyOrigin: <a class=\"trait\" href=\"frame_support/traits/dispatch/trait.EnsureOrigin.html\" title=\"trait frame_support::traits::dispatch::EnsureOrigin\">EnsureOrigin</a>&lt;RuntimeOrigin&gt;, Body: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.BodyId.html\" title=\"enum staging_xcm_builder::test_utils::BodyId\">BodyId</a>&gt;&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;RuntimeOrigin, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.OriginToPluralityVoice.html\" title=\"struct staging_xcm_builder::OriginToPluralityVoice\">OriginToPluralityVoice</a>&lt;RuntimeOrigin, EnsureBodyOrigin, Body&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()