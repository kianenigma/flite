searchState.loadedDescShard("pallet_broker", 0, "Pallet Broker\nA (Relay-chain-side) account ID.\nType for determining how to set price.\nResult of <code>AdaptPrice::adapt_price</code>.\nA record containing information regarding auto-renewal for …\nA (Relay-chain-side) balance.\nThe number of bits in the <code>CoreMask</code>.\nSimple implementation of <code>AdaptPrice</code> with two linear phases.\nThe core is fully assigned; the inner is the workload …\nHow much of a core has been assigned or, if completely …\nConfiguration of this pallet.\nThe record body of a Region which was contributed to the …\nAn element to which a core can be assigned.\nIndex of a Polkadot Core.\nCounter for the total number of set bits over every core’…\nType able to accept Coretime scheduling instructions and …\nThe region is removed; the assignment may be eligible for …\nWhether a core assignment is revokable or not.\nCore need not be used for anything.\nA per-timeslice bookkeeping record for tracking …\nInformation on a single legacy lease.\nRecord for Polkadot Core legacy leases.\nRecord for On demand core sales.\nThe core is not fully assigned; the inner is the parts …\nFraction expressed as a nominator with an assumed …\nCore should be used for the Instantaneous Coretime Pool.\nA record of flux in the InstaPool.\nThe identity of a possibly renewable Core workload.\nA record of a potential renewal.\nThe region remains with the same owner allowing the …\nRelay chain block number of <code>T</code> that implements …\nRelay chain block number provider of <code>T</code> that implements …\nSelf-describing identity for a Region of Bulk Coretime.\nThe rest of the information describing a Region.\nA provider for the relay chain block number.\nRecord for Polkadot Core reservations (generally tasked …\nThe status of a Bulk Coretime Sale.\nPerformance of a past sale.\nAn distinct item which can be scheduled on a Polkadot Core.\nThe same as <code>CoreMaskBitCount</code> but signed.\nGeneral status of the system.\nCore should be used to process the given task.\nA Task Id. In general this is called a ParachainId.\nRelay-chain block number with a fixed divisor of …\nReturn adapted prices for next sale.\nThe number of Relay-chain blocks in advance which …\nThe number of Relay-chain blocks in advance which …\nThe accumulated balance of on demand sales made on the …\nThe accumulated balance of on demand sales made on the …\nInstructs the Relay-chain to ensure that the core indexed …\nThe job that the Core should be doing.\nThe timeslice at which this Region begins.\nReturn reference to the complete workload, or <code>None</code> if …\nThe workload which will be scheduled on the Core in the …\nThe workload which will be scheduled on the Core in the …\nThe duration by which rewards for contributions to the …\nThe duration by which rewards for contributions to the …\nThe index of the Polkadot Core on which this Region will …\nThe core whose workload at the sale ending with <code>when</code> may …\nThe core for which auto renewal is enabled.\nThe total number of cores which can be assigned (one plus …\nNumber of cores which are/have been offered for sale.\nNumber of cores which are/have been offered for sale.\nNumber of cores which are/have been offered for sale.\nNumber of cores which have been sold; never more than …\nNumber of cores which have been sold; never more than …\nNumber of cores which have been sold; never more than …\nInstructs the Relay-chain to add the <code>amount</code> of DOT to the …\nReturn the complete workload, or <code>None</code> if incomplete.\nThe end of the Region.\nThe end of the Region.\nThe price of Bulk Coretime after the Leadin Period.\nThe minimum price that was achieved in this sale.\nNew minimum price to use.\nThe price of Bulk Coretime after the Leadin Period.\nThe index of the first core which is for sale. Core of …\nThe index of the first core which is for sale. Core of …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nConstruct performance via data from a <code>SaleInfoRecord</code>.\nThe proportion of cores available for sale which should be …\nThe proportion of cores available for sale which should be …\nThe number of cores we want to sell, ideally. Selling this …\nThe number of cores we want to sell, ideally.\nThe number of cores we want to sell, ideally. Selling this …\nThe length in blocks of the Interlude Period for …\nThe length in blocks of the Interlude Period for …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe last (Relay-chain) timeslice which we committed to the …\nThe timeslice of the last time we ticked.\nReturn the factor by which the regular price must be …\nThe length in blocks of the Leadin Period (where the price …\nThe length in blocks of the Leadin Period for forthcoming …\nThe length in blocks of the Leadin Period (where the price …\nThe length in blocks of the Leadin Period for forthcoming …\nThe end of the Region contributed.\nThe end of the Region contributed.\nAn artificial limit to the number of cores which are …\nAn artificial limit to the number of cores which are …\nThe regularity parts in which this Region will be …\nThe regularity parts in which this Item will be scheduled …\nThe payout remaining for the <code>private_contributions</code>, or <code>None</code>…\nThe payout remaining for the <code>private_contributions</code>, or <code>None</code>…\nSpecifies when the upcoming renewal should be performed. …\nA hook supposed to be called right after a new timeslice …\nA hook supposed to be called right after a new timeslice …\nThe owner of the Region.\nThe owner of the Region.\nThe amount paid to Polkadot for this Region, or <code>None</code> if …\nThe amount paid to Polkadot for this Region, or <code>None</code> if …\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nThe identity of the contributor.\nThe identity of the contributor.\nThe price for which the next renewal can be made.\nThe price for which the next renewal can be made.\nThe total change of the portion of the pool supplied by …\nThe total amount of Coretime (measured in Core Mask Bits …\nThe total amount of Coretime (measured in Core Mask Bits …\nThe current size of the Instantaneous Coretime Pool, …\nThe first timeslice of the Regions which are being sold in …\nThe first timeslice of the Regions which are being sold in …\nThe timeslice on which the Regions which are being sold in …\nThe timeslice on which the Regions which are being sold in …\nThe length in timeslices of Regions which are up for sale …\nThe length in timeslices of Regions which are up for sale …\nThe amount by which the renewal price increases each sale …\nThe amount by which the renewal price increases each sale …\nRequests the Relay-chain to alter the number of …\nRequests that the Relay-chain send a <code>notify_revenue</code> …\nRuntime API definition for the FRAME Broker pallet.\nThe local block number at which the sale will/did start.\nThe local block number at which the sale will/did start.\nThe price at which cores have been sold out.\nThe price at which the last core was sold.\nThe price at which cores have been sold out.\nThe total change of the portion of the pool supplied by …\nThe total amount of Coretime (measured in Core Mask Bits …\nThe total amount of Coretime (measured in Core Mask Bits …\nThe current amount of the Instantaneous Coretime Pool …\nPrice the controller is optimizing for.\nThe task which the lease is for.\nThe task assigned to the core. We keep track of it so we …\nThe height of the Relay-chain at the time the revenue …\nThe timeslice until the lease is valid.\nThe height of the Relay-chain at the time the revenue …\nAutogenerated weights for <code>pallet_broker</code>\nThe point in time that the renewable workload on <code>core</code> ends …\nMigrate the pallet storage from <code>0</code> to <code>1</code>.\nThe origin test needed for administrating this pallet.\nThe lease expiry time has already passed.\nA Region has been assigned to a particular task.\nFailed to auto-renew a core, likely due to the payer …\nThe auto-renewal limit has been reached upon renewing …\nAttempted to disable auto-renewal for a core that didn’t …\nKeeping track of cores which have auto-renewal enabled.\nContains a variant per dispatchable extrinsic that this …\nSome historical Instantaneous Core Pool Revenue is ready …\nThe pivot mask for the interlacing is complete (and …\nConfiguration trait of this pallet.\nThe current configuration of this pallet.\nSome historical Instantaneous Core Pool contribution …\nReversible conversion from local balance to Relay-chain …\nA Core has been assigned to one or more tasks and/or the …\nThe number of cores available for scheduling has changed.\nReceived core count change from the relay chain.\nA new number of cores has been requested.\nRelay chain’s Coretime API used to interact with and …\nThe workplan of the pallet’s state is invalid. This …\nSome Instantaneous Coretime Pool credit has been purchased.\nCurrency used to pay for Coretime.\nThe <code>Error</code> enum of this pallet.\nThe <code>Event</code> enum of this pallet\nThe pivot mask for the interlacing is not contained within …\nCan be used to configure the genesis state of this pallet.\nSome historical Instantaneous Core Pool payment record has …\nSome historical Instantaneous Core Pool payment record has …\nSome historical Instantaneous Core Pool payment record has …\nThe workload assigned for renewal is incomplete. This is …\nRecord of a single contribution to the Instantaneous …\nTotal InstaPool rewards for each Timeslice and the number …\nRecord of Coretime entering or leaving the Instantaneous …\nA Region has been converted into two overlapping Regions …\nThe configuration could not be applied because it is …\nA lease is about to end.\nA new lease has been created.\nThe Polkadot Core legacy leases.\nMaximum number of legacy leases.\nMaximum number of system cores.\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nThe revenue must be claimed for 1 or more timeslices.\nThe history item does not exist.\nThe caller doesn’t have the permission to enable or …\nThere is no sale happening currently.\nOnly cores which are assigned to a task can be …\nInvalid attempt to renew.\nThe owner of the region is not the origin.\nThere is no work to be done.\nWhat to do with any revenues collected from the sale of …\nThe price limit is exceeded.\nThe <code>Pallet</code> struct, the main type that implements traits …\nIdentifier from which the internal Pot is generated.\nA Region has been split into two non-overlapping Regions.\nThe pivot point of the partition at the beginning of the …\nThe pivot point of the partition at or after the end of …\nA Region has been added to the Instantaneous Coretime Pool.\nSome historical Instantaneous Core Pool payment record has …\nRecords of potential renewals.\nThe algorithm to determine the next price on the basis of …\nA Region of Bulk Coretime has been purchased.\nA Region has been dropped due to being out of date.\nThe current (unassigned or provisionally assigend) Regions.\nThe workload of a core has become renewable.\nA workload has been renewed.\nA reservation for a workload has been cancelled.\nThere is a new reservation for a workload.\nThe Polkadot Core reservations (generally tasked with the …\nThe act of claiming revenue has begun.\nA particular timeslice has a non-zero claim.\nA revenue claim has (possibly only in part) been paid.\nReceived revenue info from the relay chain.\nThe details of the current sale, including its properties …\nA new sale has been initialized.\nThe sale rotation has been started and a new sale is …\nThe sale limit has been reached.\nFailed to get the sovereign account of a task.\nType used for getting the associated account of a task. …\nThe current status of miscellaneous subsystems of this …\nAn item cannot be dropped because it is still valid.\nNumber of Relay-chain blocks per timeslice.\nThe purchase cannot happen yet as the sale period is yet …\nWe reached the limit for auto-renewals.\nThe maximum amount of leases has already been reached.\nThe maximum amount of reservations has already been …\nOwnership of a Region has been transferred.\nThere are no cores available.\nThis pallet has not yet been initialized.\nThe identified contribution to the Instantaneous Core Pool …\nThe given region identity is not known.\nThe renewal record cannot be found.\nNo reservation of the given index exists.\nThe revenue for the Instantaneous Core Sales of this …\nThe pivot mask for the interlacing is void (and therefore …\nWeight information for all calls of this pallet.\nThe current workload of each core. This gets updated with …\nThe work we plan on having each core do at a particular …\nThe renewal operation is not valid at the current time (it …\nAssign a Bulk Coretime Region to a task.\nAssign a Bulk Coretime Region to a task.\nWithdraw a region from account.\nClaim the revenue owed from inclusion in the Instantaneous …\nClaim the revenue owed from inclusion in the Instantaneous …\nConfigure the pallet.\nConfigure the pallet.\nIf there is an ongoing sale returns the current price of a …\nExtrinsic for disabling auto renewal.\nExtrinsic for disabling auto renewal.\nAuto-generated docs-only module listing all defined …\nDrop an expired Instantaneous Pool Contribution record …\nDrop an expired Instantaneous Pool Contribution record …\nDrop an expired Instantaneous Pool History record from the …\nDrop an expired Instantaneous Pool History record from the …\nDrop an expired Region from the chain.\nDrop an expired Region from the chain.\nDrop an expired Allowed Renewal record from the chain.\nDrop an expired Allowed Renewal record from the chain.\nExtrinsic for enabling auto renewal.\nExtrinsic for enabling auto renewal.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nSplit a Bulk Coretime Region into two wholly-overlapping …\nSplit a Bulk Coretime Region into two wholly-overlapping …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDeposit a region into an account.\nCreate a call with the variant <code>assign</code>.\nCreate a call with the variant <code>claim_revenue</code>.\nCreate a call with the variant <code>configure</code>.\nCreate a call with the variant <code>disable_auto_renew</code>.\nCreate a call with the variant <code>drop_contribution</code>.\nCreate a call with the variant <code>drop_history</code>.\nCreate a call with the variant <code>drop_region</code>.\nCreate a call with the variant <code>drop_renewal</code>.\nCreate a call with the variant <code>enable_auto_renew</code>.\nCreate a call with the variant <code>interlace</code>.\nCreate a call with the variant <code>notify_core_count</code>.\nCreate a call with the variant <code>notify_revenue</code>.\nCreate a call with the variant <code>partition</code>.\nCreate a call with the variant <code>pool</code>.\nCreate a call with the variant <code>purchase</code>.\nCreate a call with the variant <code>purchase_credit</code>.\nCreate a call with the variant <code>renew</code>.\nCreate a call with the variant <code>request_core_count</code>.\nCreate a call with the variant <code>reserve</code>.\nCreate a call with the variant <code>set_lease</code>.\nCreate a call with the variant <code>start_sales</code>.\nCreate a call with the variant <code>swap_leases</code>.\nCreate a call with the variant <code>transfer</code>.\nCreate a call with the variant <code>unreserve</code>.\nSplit a Bulk Coretime Region into two non-overlapping …\nSplit a Bulk Coretime Region into two non-overlapping …\nPlace a Bulk Coretime Region into the Instantaneous …\nPlace a Bulk Coretime Region into the Instantaneous …\nPurchase Bulk Coretime in the ongoing Sale.\nPurchase Bulk Coretime in the ongoing Sale.\nPurchase credit for use in the Instantaneous Coretime Pool.\nPurchase credit for use in the Instantaneous Coretime Pool.\nRenew Bulk Coretime in the ongoing Sale or its prior …\nRenew Bulk Coretime in the ongoing Sale or its prior …\nRequest a change to the number of cores available for …\nRequest a change to the number of cores available for …\nReserve a core for a workload.\nReserve a core for a workload.\nReserve a core for a single task workload for a limited …\nReserve a core for a single task workload for a limited …\nBegin the Bulk Coretime sales rotation.\nBegin the Bulk Coretime sales rotation.\nAuto-generated docs-only module listing all (public and …\nTransfer a Bulk Coretime Region to a new owner.\nTransfer a Bulk Coretime Region to a new owner.\nCancel a reservation for a workload.\nCancel a reservation for a workload.\nThe amount which was claimed at this timeslice.\nThe total amount of revenue claimed and paid.\nThe amount of credit purchased.\nThe workload to be done on the Core.\nThe time at which the workload would recommence of this …\nThe time at which the <code>workload</code> will begin on the <code>core</code>.\nThe Relay-chain account to which the credit will be made.\nThe core whose workload can be renewed.\nThe index of the core on which the renewed <code>workload</code> has …\nThe index of the Core which has been assigned.\nThe core whose workload is no longer available to be …\nThe core for which the renewal was enabled.\nThe core for which the renewal was disabled.\nThe core for which the renewal failed.\nThe number of cores requested.\nThe new number of cores available for scheduling.\nThe maximum number of cores which this pallet will attempt …\nNumber of cores which are/have been offered for sale.\nThe duration of the Region.\nThe number of timeslices for which this <code>workload</code> is newly …\nThe duration of the Region.\nThe duration of the assignment.\nThe duration of the Region.\nThe duration of the Region.\nThe price of Bulk Coretime after the Leadin Period.\nThe number of cores we want to sell, ideally.\nThe index of the reservation.\nThe index of the reservation which was cancelled.\nThe length in blocks of the Leadin Period (where the price …\nThe maximum number of timeslices which should be searched …\nThe new Regions into which it became.\nThe new Regions into which it became.\nThe next region which should be claimed for the …\nThe index of the core on which the <code>workload</code> was previously …\nThe old owner of the Region.\nThe Region which was split.\nThe Region which was interlaced.\nThe new owner of the Region.\nThe account which was supposed to pay for renewal.\nThe price paid for this Region.\nThe price at which the workload can be renewed.\nThe price paid for this renewal.\nThe nominal price of an Region of Bulk Coretime.\nThe total amount of revenue remaining to be claimed.\nThe amount of privately contributed Coretime to the …\nThe region to be claimed for.\nThe first timeslice of the Regions which are being sold in …\nThe timeslice on which the Regions which are being sold in …\nThe identity of the Region.\nThe Region which has been transferred.\nThe Region which was assigned.\nThe Region which was added to the Instantaneous Coretime …\nThe Region which no longer exists.\nThe Region whose contribution is no longer exists.\nThe amount of revenue the system has taken.\nThe amount of revenue which was ignored.\nThe local block number at which the sale will/did start.\nThe price of Bulk Coretime at the beginning of the Leadin …\nThe amount of revenue the Polkadot System has already …\nThe amount of Coretime contributed to the Instantaneous …\nThe task to which the Region was assigned.\nThe task to which a core will be assigned.\nThe task to which a core was assigned.\nThe task for which the renewal was enabled.\nThe task for which the renewal was disabled.\nThe timeslice contained in the sale period after which …\nThe timeslice at which the task will no longer be …\nThe timeslice whose claim is being processed.\nThe timeslice whose history has been initialized.\nThe timeslice whose history is no longer available.\nThe timeslice whose history is was ignored.\nThe timeslice whose history is available.\nThe Relay-chain block at which this assignment should take …\nThe timeslice whose renewal is no longer available.\nThe identity of the purchaser.\nThe identity of the renewer.\nThe account to whom revenue has been paid.\nThe account which purchased the credit.\nThe actual workload which can be renewed.\nThe workload which was renewed.\nThe workload of the reservation.\nThe workload of the now cancelled reservation.\nAssign a Bulk Coretime Region to a task.\nClaim the revenue owed from inclusion in the Instantaneous …\nConfigure the pallet.\nExtrinsic for disabling auto renewal.\nDrop an expired Instantaneous Pool Contribution record …\nDrop an expired Instantaneous Pool History record from the …\nDrop an expired Region from the chain.\nDrop an expired Allowed Renewal record from the chain.\nExtrinsic for enabling auto renewal.\nSplit a Bulk Coretime Region into two wholly-overlapping …\nWarning: Doc-Only\nWarning: Doc-Only\nSplit a Bulk Coretime Region into two non-overlapping …\nPlace a Bulk Coretime Region into the Instantaneous …\nPurchase Bulk Coretime in the ongoing Sale.\nPurchase credit for use in the Instantaneous Coretime Pool.\nRenew Bulk Coretime in the ongoing Sale or its prior …\nRequest a change to the number of cores available for …\nReserve a core for a workload.\nReserve a core for a single task workload for a limited …\nBegin the Bulk Coretime sales rotation.\nWarning: Doc-Only\nTransfer a Bulk Coretime Region to a new owner.\nCancel a reservation for a workload.\nKeeping track of cores which have auto-renewal enabled.\nThe current configuration of this pallet.\nReceived core count change from the relay chain.\nRecord of a single contribution to the Instantaneous …\nTotal InstaPool rewards for each Timeslice and the number …\nRecord of Coretime entering or leaving the Instantaneous …\nThe Polkadot Core legacy leases.\nRecords of potential renewals.\nThe current (unassigned or provisionally assigend) Regions.\nThe Polkadot Core reservations (generally tasked with the …\nReceived revenue info from the relay chain.\nThe details of the current sale, including its properties …\nThe current status of miscellaneous subsystems of this …\nThe current workload of each core. This gets updated with …\nThe work we plan on having each core do at a particular …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf there is an ongoing sale returns the current price of a …\nWeights for <code>pallet_broker</code> using the Substrate node and …\nWeight functions needed for <code>pallet_broker</code>.\nStorage: <code>Broker::Configuration</code> (r:1 w:0) Proof: …\nStorage: <code>Broker::InstaPoolContribution</code> (r:1 w:1) Proof: …\nStorage: <code>Broker::Configuration</code> (r:0 w:1) Proof: …\nStorage: <code>Broker::AutoRenewals</code> (r:1 w:1) Proof: …\nStorage: <code>Broker::Status</code> (r:1 w:1) Proof: <code>Broker::Status</code> (…\nStorage: <code>Broker::Configuration</code> (r:1 w:0) Proof: …\nStorage: <code>Broker::Configuration</code> (r:1 w:0) Proof: …\nStorage: <code>Broker::Status</code> (r:1 w:0) Proof: <code>Broker::Status</code> (…\nStorage: <code>Broker::Status</code> (r:1 w:0) Proof: <code>Broker::Status</code> (…\nStorage: <code>Broker::SaleInfo</code> (r:1 w:1) Proof: <code>Broker::SaleInfo</code>…\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nStorage: <code>Broker::Regions</code> (r:1 w:3) Proof: <code>Broker::Regions</code> (…\nCalls <code>U::from(self)</code>.\nStorage: <code>Broker::CoreCountInbox</code> (r:0 w:1) Proof: …\nStorage: <code>Broker::RevenueInbox</code> (r:0 w:1) Proof: …\nStorage: <code>Broker::Regions</code> (r:1 w:2) Proof: <code>Broker::Regions</code> (…\nStorage: <code>Broker::Status</code> (r:1 w:0) Proof: <code>Broker::Status</code> (…\nStorage: <code>Broker::CoreCountInbox</code> (r:1 w:1) Proof: …\nStorage: <code>Broker::Workplan</code> (r:1 w:1) Proof: <code>Broker::Workplan</code>…\nStorage: <code>Broker::InstaPoolIo</code> (r:1 w:0) Proof: …\nStorage: UNKNOWN KEY <code>0xf308d869daf021a7724e69c557dd8dbe</code> …\nStorage: <code>Broker::Status</code> (r:1 w:0) Proof: <code>Broker::Status</code> (…\nStorage: <code>System::Account</code> (r:1 w:1) Proof: <code>System::Account</code> (…\nStorage: <code>Broker::Configuration</code> (r:1 w:0) Proof: …\nThe range of component <code>n</code> is <code>[0, 1000]</code>.\nStorage: <code>Broker::Reservations</code> (r:1 w:1) Proof: …\nThe range of component <code>n</code> is <code>[0, 1000]</code>.\nStorage: <code>Broker::Leases</code> (r:1 w:1) Proof: <code>Broker::Leases</code> (…\nStorage: <code>Broker::Configuration</code> (r:1 w:0) Proof: …\nStorage: <code>Broker::Leases</code> (r:1 w:1) Proof: <code>Broker::Leases</code> (…\nStorage: <code>Broker::Regions</code> (r:1 w:1) Proof: <code>Broker::Regions</code> (…\nStorage: <code>Broker::Reservations</code> (r:1 w:1) Proof: …")