(function() {
    var implementors = Object.fromEntries([["pallet_babe",[["impl&lt;T: <a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_support/traits/randomness/trait.Randomness.html\" title=\"trait frame_support::traits::randomness::Randomness\">Randomness</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Hash\" title=\"type frame_system::pallet::Config::Hash\">Hash</a>, &lt;&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Block\" title=\"type frame_system::pallet::Config::Block\">Block</a> as HeaderProvider&gt;::HeaderT as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Number\" title=\"type sp_runtime::traits::Header::Number\">Number</a>&gt; for <a class=\"struct\" href=\"pallet_babe/struct.RandomnessFromOneEpochAgo.html\" title=\"struct pallet_babe::RandomnessFromOneEpochAgo\">RandomnessFromOneEpochAgo</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_support/traits/randomness/trait.Randomness.html\" title=\"trait frame_support::traits::randomness::Randomness\">Randomness</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Hash\" title=\"type frame_system::pallet::Config::Hash\">Hash</a>, &lt;&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Block\" title=\"type frame_system::pallet::Config::Block\">Block</a> as HeaderProvider&gt;::HeaderT as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Number\" title=\"type sp_runtime::traits::Header::Number\">Number</a>&gt; for <a class=\"struct\" href=\"pallet_babe/struct.RandomnessFromTwoEpochsAgo.html\" title=\"struct pallet_babe::RandomnessFromTwoEpochsAgo\">RandomnessFromTwoEpochsAgo</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_support/traits/randomness/trait.Randomness.html\" title=\"trait frame_support::traits::randomness::Randomness\">Randomness</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Hash\" title=\"type frame_system::pallet::Config::Hash\">Hash</a>&gt;, &lt;&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Block\" title=\"type frame_system::pallet::Config::Block\">Block</a> as HeaderProvider&gt;::HeaderT as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Number\" title=\"type sp_runtime::traits::Header::Number\">Number</a>&gt; for <a class=\"struct\" href=\"pallet_babe/struct.CurrentBlockRandomness.html\" title=\"struct pallet_babe::CurrentBlockRandomness\">CurrentBlockRandomness</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_support/traits/randomness/trait.Randomness.html\" title=\"trait frame_support::traits::randomness::Randomness\">Randomness</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Hash\" title=\"type frame_system::pallet::Config::Hash\">Hash</a>&gt;, &lt;&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Block\" title=\"type frame_system::pallet::Config::Block\">Block</a> as HeaderProvider&gt;::HeaderT as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Number\" title=\"type sp_runtime::traits::Header::Number\">Number</a>&gt; for <a class=\"struct\" href=\"pallet_babe/struct.ParentBlockRandomness.html\" title=\"struct pallet_babe::ParentBlockRandomness\">ParentBlockRandomness</a>&lt;T&gt;"]]],["pallet_contracts",[["impl&lt;Output, BlockNumber&gt; <a class=\"trait\" href=\"frame_support/traits/randomness/trait.Randomness.html\" title=\"trait frame_support::traits::randomness::Randomness\">Randomness</a>&lt;Output, BlockNumber&gt; for <a class=\"struct\" href=\"pallet_contracts/pallet/config_preludes/struct.TestDefaultConfig.html\" title=\"struct pallet_contracts::pallet::config_preludes::TestDefaultConfig\">TestDefaultConfig</a>"]]],["pallet_insecure_randomness_collective_flip",[["impl&lt;T: <a class=\"trait\" href=\"pallet_insecure_randomness_collective_flip/pallet/trait.Config.html\" title=\"trait pallet_insecure_randomness_collective_flip::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_support/traits/randomness/trait.Randomness.html\" title=\"trait frame_support::traits::randomness::Randomness\">Randomness</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Hash\" title=\"type frame_system::pallet::Config::Hash\">Hash</a>, &lt;&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Block\" title=\"type frame_system::pallet::Config::Block\">Block</a> as HeaderProvider&gt;::HeaderT as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Number\" title=\"type sp_runtime::traits::Header::Number\">Number</a>&gt; for <a class=\"struct\" href=\"pallet_insecure_randomness_collective_flip/pallet/struct.Pallet.html\" title=\"struct pallet_insecure_randomness_collective_flip::pallet::Pallet\">Pallet</a>&lt;T&gt;"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[5839,448,1519]}