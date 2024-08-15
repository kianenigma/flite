(function() {var implementors = {
"staging_xcm_builder":[["impl <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.AllowHrmpNotificationsFromRelayChain.html\" title=\"struct staging_xcm_builder::AllowHrmpNotificationsFromRelayChain\">AllowHrmpNotificationsFromRelayChain</a>"],["impl <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.DenyReserveTransferToRelayChain.html\" title=\"struct staging_xcm_builder::DenyReserveTransferToRelayChain\">DenyReserveTransferToRelayChain</a>"],["impl <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.TakeWeightCredit.html\" title=\"struct staging_xcm_builder::TakeWeightCredit\">TakeWeightCredit</a>"],["impl&lt;Deny, Allow&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.DenyThenTry.html\" title=\"struct staging_xcm_builder::DenyThenTry\">DenyThenTry</a>&lt;Deny, Allow&gt;<div class=\"where\">where\n    Deny: <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a>,\n    Allow: <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a>,</div>"],["impl&lt;Inner, SuspensionChecker&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.RespectSuspension.html\" title=\"struct staging_xcm_builder::RespectSuspension\">RespectSuspension</a>&lt;Inner, SuspensionChecker&gt;<div class=\"where\">where\n    Inner: <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a>,\n    SuspensionChecker: <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.CheckSuspension.html\" title=\"trait staging_xcm_executor::traits::should_execute::CheckSuspension\">CheckSuspension</a>,</div>"],["impl&lt;InnerBarrier: <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a>&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.TrailingSetTopicAsId.html\" title=\"struct staging_xcm_builder::TrailingSetTopicAsId\">TrailingSetTopicAsId</a>&lt;InnerBarrier&gt;"],["impl&lt;InnerBarrier: <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a>, LocalUniversal: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;<a class=\"type\" href=\"staging_xcm_builder/test_utils/type.InteriorLocation.html\" title=\"type staging_xcm_builder::test_utils::InteriorLocation\">InteriorLocation</a>&gt;, MaxPrefixes: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.WithComputedOrigin.html\" title=\"struct staging_xcm_builder::WithComputedOrigin\">WithComputedOrigin</a>&lt;InnerBarrier, LocalUniversal, MaxPrefixes&gt;"],["impl&lt;ResponseHandler: <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.OnResponse.html\" title=\"trait staging_xcm_builder::test_utils::OnResponse\">OnResponse</a>&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.AllowKnownQueryResponses.html\" title=\"struct staging_xcm_builder::AllowKnownQueryResponses\">AllowKnownQueryResponses</a>&lt;ResponseHandler&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt;&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.AllowExplicitUnpaidExecutionFrom.html\" title=\"struct staging_xcm_builder::AllowExplicitUnpaidExecutionFrom\">AllowExplicitUnpaidExecutionFrom</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt;&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.AllowSubscriptionsFrom.html\" title=\"struct staging_xcm_builder::AllowSubscriptionsFrom\">AllowSubscriptionsFrom</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt;&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.AllowTopLevelPaidExecutionFrom.html\" title=\"struct staging_xcm_builder::AllowTopLevelPaidExecutionFrom\">AllowTopLevelPaidExecutionFrom</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt;&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/should_execute/trait.ShouldExecute.html\" title=\"trait staging_xcm_executor::traits::should_execute::ShouldExecute\">ShouldExecute</a> for <a class=\"struct\" href=\"staging_xcm_builder/struct.AllowUnpaidExecutionFrom.html\" title=\"struct staging_xcm_builder::AllowUnpaidExecutionFrom\">AllowUnpaidExecutionFrom</a>&lt;T&gt;"]],
"staging_xcm_executor":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()