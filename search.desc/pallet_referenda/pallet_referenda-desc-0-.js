searchState.loadedDescShard("pallet_referenda", 0, "Referenda Pallet\nReferendum finished with approval. Submission deposit is …\nReferendum finished with approval. Submission deposit is …\nReferendum finished with cancellation. Submission deposit …\nReferendum finished with cancellation. Submission deposit …\nType for describing a curve over the 2-dimensional space …\nA trait for querying a single value from a type.\nThe identifier for a track.\nA an bounded <code>Call</code>. Its encoding must be at most 128 bytes.\nReferendum finished with a kill.\nReferendum finished with a kill.\nA hash with no preimage length. We do not support creation …\nLinear curve starting at <code>(0, ceil)</code>, proceeding linearly to …\nA hash of the call together with an upper limit for its …\nReferendum has been submitted and is being voted on.\nReferendum has been submitted and is being voted on.\nA recipocal (<code>K/(x+S)-T</code>) curve: <code>factor</code> is <code>K</code> and <code>x_offset</code> is …\nA referendum index.\nInfo regarding a referendum, present or past.\nInfo regarding an ongoing referendum.\nReferendum finished with rejection. Submission deposit is …\nReferendum finished with rejection. Submission deposit is …\nThe origin type from which a track is implied.\nStepped curve, beginning at <code>(0, begin)</code>, then remaining …\nReferendum finished and was never decided. Submission …\nReferendum finished and was never decided. Submission …\nInformation on the voting tracks.\nA contiguous growable array type, written as <code>Vec&lt;T&gt;</code>, short …\nThe next scheduled wake-up, if <code>Some</code>.\nThe next scheduled wake-up, if <code>Some</code>.\nReturns a reference to the underlying allocator.\nMoves all the elements of <code>other</code> into <code>self</code>, leaving <code>other</code> …\nReturns an unsafe mutable pointer to the vector’s …\nExtracts a mutable slice of the entire vector.\nReturns a raw pointer to the vector’s buffer, or a …\nExtracts a slice containing the entire vector.\nReturns the total number of elements the vector can hold …\nCheck assumptions about the static data that this trait …\nCheck assumptions about the static data that this trait …\nClears the vector, removing all values.\nOverwrites the contents of <code>self</code> with a clone of the …\nAmount of time that the approval criteria must hold before …\nAmount of time that the approval criteria must hold before …\nIf <code>Some</code>, then the referendum has entered confirmation …\nIf <code>Some</code>, then the referendum has entered confirmation …\nThe status of a decision being made. If <code>None</code>, it has not …\nThe status of a decision being made. If <code>None</code>, it has not …\nThe deposit reserved for this referendum to be decided.\nAmount that must be placed on deposit before a decision …\nAmount that must be placed on deposit before a decision …\nThe deposit reserved for this referendum to be decided.\nAmount of time that a decision may take to be approved …\nAmount of time that a decision may take to be approved …\nRemoves consecutive repeated elements in the vector …\nRemoves all but the first of consecutive elements in the …\nRemoves all but the first of consecutive elements in the …\nCreates an empty <code>Vec&lt;T&gt;</code>.\nDetermine the smallest <code>x</code> value such that <code>passing</code> returns …\nRemoves the specified range from the vector in bulk, …\nThe time the proposal should be scheduled for enactment.\nThe time the proposal should be scheduled for enactment.\nEncode this value as ASN.1 DER using the provided <code>Writer</code>.\nCompute the length of this value in bytes when encoded as …\nClones and appends all elements in a slice to the <code>Vec</code>.\nCopies elements from <code>src</code> range to the end of the vector.\nCreates an iterator which uses a closure to determine if …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAllocates a <code>Vec&lt;T&gt;</code> and fills it by cloning <code>s</code>’s items.\nAllocates a <code>Vec&lt;T&gt;</code> and fills it by cloning <code>s</code>’s items.\nAllocates a <code>Vec&lt;T&gt;</code> and fills it by cloning <code>s</code>’s items.\nAllocates a <code>Vec&lt;T&gt;</code> and fills it by cloning <code>s</code>’s items.\nAllocates a <code>Vec&lt;T&gt;</code> and moves <code>s</code>’s items into it.\nTurn a <code>VecDeque&lt;T&gt;</code> into a <code>Vec&lt;T&gt;</code>.\nConverts the given <code>String</code> to a vector <code>Vec</code> that holds …\nConverts a <code>CString</code> into a Vec&lt;u8&gt;.\nConverts a boxed slice into a vector by transferring …\nConverts a <code>BinaryHeap&lt;T&gt;</code> into a <code>Vec&lt;T&gt;</code>.\nAllocates a <code>Vec&lt;u8&gt;</code> and fills it with a UTF-8 string.\nReturns the argument unchanged.\nConverts a clone-on-write slice into a vector.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nCreates a <code>Vec&lt;T&gt;</code> directly from a pointer, a length, and a …\nCreates a <code>Vec&lt;T, A&gt;</code> directly from a pointer, a length, a …\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nReturn the current value.\nWhether we have been placed in the queue for being decided …\nWhether we have been placed in the queue for being decided …\nReturn the track info for track <code>id</code>, by default this just …\nReturn the track info for track <code>id</code>, by default this just …\nPrint some info on the curve.\nInserts an element at position <code>index</code> within the vector, …\nInserts an item into a sorted series.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts the vector into <code>Box&lt;[T]&gt;</code>.\nTakes a <code>Vec&lt;[T; N]&gt;</code> and flattens it into a <code>Vec&lt;T&gt;</code>.\nCreates a consuming iterator, that is, one that moves each …\nDecomposes a <code>Vec&lt;T&gt;</code> into its raw components: …\nDecomposes a <code>Vec&lt;T&gt;</code> into its raw components: …\nReturns <code>true</code> if the vector contains no elements.\nConsumes and leaks the <code>Vec</code>, returning a mutable reference …\nReturns the number of elements in the vector, also …\nCreate a <code>Curve::Linear</code> instance from a high-level …\nCreate a <code>Curve::Reciprocal</code> instance from a high-level …\nA limit for the number of referenda on this track that can …\nA limit for the number of referenda on this track that can …\nStorage migrations for the referenda pallet.\nMinimum aye votes as percentage of overall …\nMinimum aye votes as percentage of overall …\nMinimum amount of time that an approved proposal must be …\nMinimum amount of time that an approved proposal must be …\nMinimum pre-conviction aye-votes (“support”) as …\nMinimum pre-conviction aye-votes (“support”) as …\nName of this track.\nName of this track.\nConstructs a new, empty <code>Vec&lt;T&gt;</code>.\nConstructs a new, empty <code>Vec&lt;T, A&gt;</code>.\nThe origin for this referendum.\nThe origin for this referendum.\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nReturn <code>true</code> iff the <code>y</code> value is greater than the curve at …\nRemoves the last element from a vector and returns it, or …\nRemoves and returns the last element in a vector if the …\nAmount of time this must be submitted for before a …\nAmount of time this must be submitted for before a …\nThe hash of the proposal up for referendum.\nThe hash of the proposal up for referendum.\nAppends an element to the back of a collection.\nAppends an element if there is sufficient spare capacity, …\nRemoves and returns the element at position <code>index</code> within …\nReserves capacity for at least <code>additional</code> more elements to …\nReserves the minimum capacity for at least <code>additional</code> more …\nResizes the <code>Vec</code> in-place so that <code>len</code> is equal to <code>new_len</code>.\nResizes the <code>Vec</code> in-place so that <code>len</code> is equal to <code>new_len</code>.\nRetains only the elements specified by the predicate.\nRetains only the elements specified by the predicate, …\nForces the length of the vector to <code>new_len</code>.\nShrinks the capacity of the vector with a lower bound.\nShrinks the capacity of the vector as much as possible.\nWhen this referendum began being “decided”. If …\nWhen this referendum began being “decided”. If …\nReturns the remaining spare capacity of the vector as a …\nCreates a splicing iterator that replaces the specified …\nReturns vector content as a slice of <code>T</code>, along with the …\nSplits the collection into two at the given index.\nThe deposit reserved for the submission of this referendum.\nThe deposit reserved for the submission of this referendum.\nThe time of submission. Once <code>UndecidingTimeout</code> passes, it …\nThe time of submission. Once <code>UndecidingTimeout</code> passes, it …\nRemoves an element from the vector and returns it.\nTake the Decision Deposit from <code>self</code>, if there is one. …\nTake the Submission Deposit from <code>self</code>, if there is one and …\nThe current tally of votes in this referendum.\nThe current tally of votes in this referendum.\nDetermine the <code>y</code> value for the given <code>x</code> value.\nThe track of this referendum.\nThe track of this referendum.\nDetermine the voting track for the given <code>origin</code>.\nSorted array of known tracks and their information.\nShortens the vector, keeping the first <code>len</code> elements and …\nTries to reserve capacity for at least <code>additional</code> more …\nTries to reserve the minimum capacity for at least …\nConstructs a new, empty <code>Vec&lt;T&gt;</code> with at least the specified …\nConstructs a new, empty <code>Vec&lt;T, A&gt;</code> with at least the …\nAutogenerated weights for <code>pallet_referenda</code>\nConstructs a new, empty <code>Vec&lt;T&gt;</code> with at least the specified …\nConstructs a new, empty <code>Vec&lt;T, A&gt;</code> with at least the …\n“Best effort” zeroization for <code>Vec</code>.\nInitial version of storage types.\nReferendum finished with approval. Submission deposit is …\nReferendum finished with approval. Submission deposit is …\nReferendum finished with cancellation. Submission deposit …\nReferendum finished with cancellation. Submission deposit …\nReferendum finished with a kill.\nReferendum finished with a kill.\nReferendum has been submitted and is being voted on.\nReferendum has been submitted and is being voted on.\nInfo regarding a referendum, present or past.\nReferendum finished with rejection. Submission deposit is …\nReferendum finished with rejection. Submission deposit is …\nReferendum finished and was never decided. Submission …\nReferendum finished and was never decided. Submission …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTransforms a submission deposit of …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nQuantization level for the referendum wakeup scheduler. A …\nA referendum has been approved and its proposal has been …\nThe referendum index provided is invalid in this context.\nThe referendum status is invalid for this operation.\nThe track identifier given was invalid.\nContains a variant per dispatchable extrinsic that this …\nOrigin from which any vote may be cancelled.\nA referendum has been cancelled.\nConfiguration trait of this pallet.\nA referendum has ended its confirmation phase and is ready …\nCurrency type for this pallet.\nThe number of referenda being decided currently.\nThe decision deposit has been placed.\nThe decision deposit has been refunded.\nA referendum has moved into the deciding phase.\nA deposit has been slashed.\nThe <code>Error</code> enum of this pallet.\nThe <code>Event</code> enum of this pallet\nThere are already a full complement of referenda in …\nReferendum’s decision deposit is already paid.\n<code>Instance1</code> to be used for instantiable pallets defined with …\nOrigin from which any vote may be killed.\nA referendum has been killed.\nMaximum size of the referendum queue for a single track.\nMetadata for a referendum has been cleared.\nThe metadata is a general information concerning the …\nMetadata for a referendum has been set.\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nThe deposit cannot be refunded since none was made.\nThe deposit refunder is not the depositor.\nNo track exists for the proposal origin.\nReferendum is not ongoing.\nThere was nothing to do in the advancement.\nThe <code>Pallet</code> struct, the main type that implements traits …\nThe preimage does not exist.\nThe preimage is stored with a different length than the …\nThe preimage provider.\nThe queue of the track is empty.\nThe next free referendum index, aka the number of …\nInformation concerning any given referendum.\nA proposal has been rejected by referendum.\nThe Scheduler.\nHandler for the unbalanced reduction when slashing a …\nThe minimum amount to be used as a deposit for a public …\nThe submission deposit has been refunded.\nOrigin from which proposals may be submitted.\nA referendum has been submitted.\nThe tallying type.\nA referendum has been timed out without being decided.\nThe sorted list of referenda ready to be decided but not …\nInformation concerning the different referendum tracks.\nThe number of blocks after submission that a referendum …\nAny deposit cannot be refunded until after the decision is …\nThe counting type for votes. Usually just balance.\nWeight information for extrinsics in this pallet.\nCancel an ongoing referendum.\nCancel an ongoing referendum.\nAuto-generated docs-only module listing all defined …\nCheck that referendum <code>index</code> is in the <code>Ongoing</code> state and …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether the referendum is passing. Referendum must …\nCancel an ongoing referendum and slash the deposits.\nCancel an ongoing referendum and slash the deposits.\nCreate a call with the variant <code>cancel</code>.\nCreate a call with the variant <code>kill</code>.\nCreate a call with the variant <code>nudge_referendum</code>.\nCreate a call with the variant <code>one_fewer_deciding</code>.\nCreate a call with the variant <code>place_decision_deposit</code>.\nCreate a call with the variant <code>refund_decision_deposit</code>.\nCreate a call with the variant <code>refund_submission_deposit</code>.\nCreate a call with the variant <code>set_metadata</code>.\nCreate a call with the variant <code>submit</code>.\nAdvance a referendum onto its next logical state. Only …\nAdvance a referendum onto its next logical state. Only …\nAdvance a track onto its next logical state. Only used …\nAdvance a track onto its next logical state. Only used …\nPost the Decision Deposit for a referendum.\nPost the Decision Deposit for a referendum.\nRefund the Decision Deposit for a closed referendum back …\nRefund the Decision Deposit for a closed referendum back …\nRefund the Submission Deposit for a closed referendum back …\nRefund the Submission Deposit for a closed referendum back …\nSet or clear metadata of a referendum.\nSet or clear metadata of a referendum.\nAuto-generated docs-only module listing all (public and …\nPropose a referendum on a privileged action.\nPropose a referendum on a privileged action.\nThe amount placed by the account.\nThe amount placed by the account.\nThe amount placed by the account.\nThe amount placed by the account.\nPreimage hash.\nPreimage hash.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nIndex of the referendum.\nThe proposal for the referendum.\nThe proposal for the referendum.\nThe current tally of votes in this referendum.\nThe final tally of votes in this referendum.\nThe final tally of votes in this referendum.\nThe final tally of votes in this referendum.\nThe final tally of votes in this referendum.\nThe final tally of votes in this referendum.\nThe track (and by extension proposal dispatch origin) of …\nThe track (and by extension proposal dispatch origin) of …\nThe account who placed the deposit.\nThe account who placed the deposit.\nThe account who placed the deposit.\nThe account who placed the deposit.\nCancel an ongoing referendum.\nCancel an ongoing referendum and slash the deposits.\nAdvance a referendum onto its next logical state. Only …\nAdvance a track onto its next logical state. Only used …\nPost the Decision Deposit for a referendum.\nRefund the Decision Deposit for a closed referendum back …\nRefund the Submission Deposit for a closed referendum back …\nSet or clear metadata of a referendum.\nPropose a referendum on a privileged action.\nThe number of referenda being decided currently.\nThe metadata is a general information concerning the …\nThe next free referendum index, aka the number of …\nInformation concerning any given referendum.\nThe sorted list of referenda ready to be decided but not …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWeights for <code>pallet_referenda</code> using the Substrate node and …\nWeight functions needed for <code>pallet_referenda</code>.\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:0) Proof: …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:0) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:0) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::TrackQueue</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::TrackQueue</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::TrackQueue</code> (r:1 w:0) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:1) Proof: …\nStorage: <code>Referenda::ReferendumInfoFor</code> (r:1 w:0) Proof: …\nStorage: <code>Referenda::ReferendumCount</code> (r:1 w:1) Proof: …")