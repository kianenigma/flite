searchState.loadedDescShard("pallet_ranked_collective", 0, "Ranked collective system.\nVote was an aye with given vote weight.\nHelper functions to setup benchmarking.\nPoll class type.\nGuard to ensure that the given origin is a member of the …\nGuard to ensure that the given origin is a member of the …\nGuard to ensure that the given origin is a member of the …\nGuard to ensure that the given origin is a member of the …\nVote-weight scheme where all voters get one vote plus …\nTrait for getting the maximum number of voters for a given …\nVote-weight scheme where all voters get one vote plus an …\nA number of members.\nRecord needed for every member.\nVote was a nay with given vote weight.\nMember rank.\nAggregated votes for an ongoing poll by members of the …\nVote-weight scheme where all voters get one vote …\nRecord needed for every vote.\nVotes.\nEnsure that this member is registered correctly.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nReturn the maximum number of voters for the poll class <code>c</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nAutogenerated weights for <code>pallet_ranked_collective</code>\nThe origin required to add a member.\nAccount is already a member.\nContains a variant per dispatchable extrinsic that this …\nConfiguration trait of this pallet.\nUnexpected error in state.\nThe origin required to demote a member. The success value …\nThe <code>Error</code> enum of this pallet.\nThe <code>Event</code> enum of this pallet\nThe origin that can swap the account of a member.\nThe index of each ranks’s member into the group of …\nThe members in the collective by index. All indices in the …\n<code>Instance1</code> to be used for instantiable pallets defined with …\nThe information provided is incorrect.\nThe maximum number of members for a given rank in the …\nA member <code>who</code> has been added.\nThe number of members in the collective who have at least …\nThe member <code>who</code> had their <code>AccountId</code> changed to <code>new_who</code>.\nThe member <code>who</code> of given <code>rank</code> has been removed from the …\nAn external handler that will be notified when two members …\nThe current members of the collective.\nConvert the tally class into the minimum rank required to …\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nThe origin is not sufficiently privileged to do the …\nThere are no further records to be removed.\nAccount is not a member.\nThe given poll index is unknown or has closed.\nThe given poll is still ongoing.\nThe <code>Pallet</code> struct, the main type that implements traits …\nThe polling system used for our voting.\nThe origin required to promote a member. The success value …\nThe member <code>who</code>se rank has been changed to the given <code>rank</code>.\nThe member’s rank is too low to vote.\nThe origin required to remove a member.\nThe runtime event type.\nThe new member to exchange is the same as the old member\nThe max member count for the rank has been reached.\nConvert a rank_delta into a number of votes the rank gets.\nThe member <code>who</code> has voted for the <code>poll</code> with the given <code>vote</code> …\nVotes on a given proposal, if it is ongoing.\nStorage type is <code>StorageMap</code> with key type …\nWeight information for extrinsics in this pallet.\nIntroduce a new member.\nIntroduce a new member.\nDetermine the rank of the account behind the <code>Signed</code> origin …\nRemove votes from the given poll. It must have ended.\nRemove votes from the given poll. It must have ended.\nDecrement the rank of an existing member by one. If the …\nDecrement the rank of an existing member by one. If the …\nAuto-generated docs-only module listing all defined …\nAdds a member into the ranked collective at level 0.\nAdd a member to the rank collective, and continue to …\nPromotes a member in the ranked collective into the next …\nRemoves a member from the rank collective\nExchanges a member with a new account and the same …\nExchanges a member with a new account and the same …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a call with the variant <code>add_member</code>.\nCreate a call with the variant <code>cleanup_poll</code>.\nCreate a call with the variant <code>demote_member</code>.\nCreate a call with the variant <code>exchange_member</code>.\nCreate a call with the variant <code>promote_member</code>.\nCreate a call with the variant <code>remove_member</code>.\nCreate a call with the variant <code>vote</code>.\nIncrement the rank of an existing member by one.\nIncrement the rank of an existing member by one.\nRemove the member entirely.\nRemove the member entirely.\nAuto-generated docs-only module listing all (public and …\nAdd an aye or nay vote for the sender to the given …\nAdd an aye or nay vote for the sender to the given …\nIntroduce a new member.\nRemove votes from the given poll. It must have ended.\nDecrement the rank of an existing member by one. If the …\nExchanges a member with a new account and the same …\nIncrement the rank of an existing member by one.\nRemove the member entirely.\nAdd an aye or nay vote for the sender to the given …\nThe index of each ranks’s member into the group of …\nThe members in the collective by index. All indices in the …\nThe number of members in the collective who have at least …\nThe current members of the collective.\nVotes on a given proposal, if it is ongoing.\nWarning: Doc-Only\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWeights for <code>pallet_ranked_collective</code> using the Substrate …\nWeight functions needed for <code>pallet_ranked_collective</code>.\nStorage: <code>RankedCollective::Members</code> (r:1 w:1) Proof: …\nStorage: <code>RankedPolls::ReferendumInfoFor</code> (r:1 w:0) Proof: …\nStorage: <code>RankedCollective::Members</code> (r:1 w:1) Proof: …\nStorage: <code>RankedCollective::Members</code> (r:2 w:2) Proof: …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nStorage: <code>RankedCollective::Members</code> (r:1 w:1) Proof: …\nStorage: <code>RankedCollective::Members</code> (r:1 w:1) Proof: …\nStorage: <code>RankedCollective::Members</code> (r:1 w:0) Proof: …")