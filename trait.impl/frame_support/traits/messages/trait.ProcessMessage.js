(function() {var implementors = {
"bridge_hub_common":[["impl&lt;XcmpProcessor, SnowbridgeProcessor&gt; <a class=\"trait\" href=\"frame_support/traits/messages/trait.ProcessMessage.html\" title=\"trait frame_support::traits::messages::ProcessMessage\">ProcessMessage</a> for <a class=\"struct\" href=\"bridge_hub_common/message_queue/struct.BridgeHubMessageRouter.html\" title=\"struct bridge_hub_common::message_queue::BridgeHubMessageRouter\">BridgeHubMessageRouter</a>&lt;XcmpProcessor, SnowbridgeProcessor&gt;<div class=\"where\">where\n    XcmpProcessor: <a class=\"trait\" href=\"frame_support/traits/messages/trait.ProcessMessage.html\" title=\"trait frame_support::traits::messages::ProcessMessage\">ProcessMessage</a>&lt;Origin = <a class=\"enum\" href=\"bridge_hub_common/message_queue/enum.AggregateMessageOrigin.html\" title=\"enum bridge_hub_common::message_queue::AggregateMessageOrigin\">AggregateMessageOrigin</a>&gt;,\n    SnowbridgeProcessor: <a class=\"trait\" href=\"frame_support/traits/messages/trait.ProcessMessage.html\" title=\"trait frame_support::traits::messages::ProcessMessage\">ProcessMessage</a>&lt;Origin = <a class=\"enum\" href=\"bridge_hub_common/message_queue/enum.AggregateMessageOrigin.html\" title=\"enum bridge_hub_common::message_queue::AggregateMessageOrigin\">AggregateMessageOrigin</a>&gt;,</div>"]],
"pallet_message_queue":[["impl&lt;Origin, const REQUIRED_WEIGHT: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; <a class=\"trait\" href=\"frame_support/traits/messages/trait.ProcessMessage.html\" title=\"trait frame_support::traits::messages::ProcessMessage\">ProcessMessage</a> for <a class=\"struct\" href=\"pallet_message_queue/mock_helpers/struct.NoopMessageProcessor.html\" title=\"struct pallet_message_queue::mock_helpers::NoopMessageProcessor\">NoopMessageProcessor</a>&lt;Origin, REQUIRED_WEIGHT&gt;<div class=\"where\">where\n    Origin: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.FullCodec.html\" title=\"trait parity_scale_codec::codec::FullCodec\">FullCodec</a> + <a class=\"trait\" href=\"parity_scale_codec/max_encoded_len/trait.MaxEncodedLen.html\" title=\"trait parity_scale_codec::max_encoded_len::MaxEncodedLen\">MaxEncodedLen</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div>"]],
"snowbridge_pallet_outbound_queue":[["impl&lt;T: <a class=\"trait\" href=\"snowbridge_pallet_outbound_queue/pallet/trait.Config.html\" title=\"trait snowbridge_pallet_outbound_queue::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_support/traits/messages/trait.ProcessMessage.html\" title=\"trait frame_support::traits::messages::ProcessMessage\">ProcessMessage</a> for <a class=\"struct\" href=\"snowbridge_pallet_outbound_queue/pallet/struct.Pallet.html\" title=\"struct snowbridge_pallet_outbound_queue::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"staging_xcm_builder":[["impl&lt;MessageOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt; + <a class=\"trait\" href=\"parity_scale_codec/codec/trait.FullCodec.html\" title=\"trait parity_scale_codec::codec::FullCodec\">FullCodec</a> + <a class=\"trait\" href=\"parity_scale_codec/max_encoded_len/trait.MaxEncodedLen.html\" title=\"trait parity_scale_codec::max_encoded_len::MaxEncodedLen\">MaxEncodedLen</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, XcmExecutor: <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.ExecuteXcm.html\" title=\"trait staging_xcm_builder::test_utils::ExecuteXcm\">ExecuteXcm</a>&lt;Call&gt;, Call&gt; <a class=\"trait\" href=\"frame_support/traits/messages/trait.ProcessMessage.html\" title=\"trait frame_support::traits::messages::ProcessMessage\">ProcessMessage</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.ProcessXcmMessage.html\" title=\"struct staging_xcm_builder::ProcessXcmMessage\">ProcessXcmMessage</a>&lt;MessageOrigin, XcmExecutor, Call&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()