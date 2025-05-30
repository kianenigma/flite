#![cfg_attr(not(feature = "std"), no_std)]

extern crate alloc;
use alloc::{vec, vec::Vec};
use polkadot_sdk::{
	polkadot_sdk_frame::{
		self as frame,
		runtime::{apis, prelude::*},
	},
	sp_genesis_builder,
	sp_weights::constants::{WEIGHT_PROOF_SIZE_PER_MB, WEIGHT_REF_TIME_PER_MILLIS},
};

#[polkadot_sdk::frame_support::runtime]
pub mod runtime {
	use super::*;
	#[runtime::runtime]
	#[runtime::derive(
		RuntimeCall,
		RuntimeEvent,
		RuntimeError,
		RuntimeOrigin,
		RuntimeTask,
		// Note that we don't need some of these, so we don't ask them to be generated for simplicity.
		RuntimeFreezeReason,
		RuntimeHoldReason,
		RuntimeSlashReason,
		RuntimeLockId,
	)]
	pub struct Runtime;

	#[runtime::pallet_index(0)]
	pub type System = polkadot_sdk::frame_system;

	#[runtime::pallet_index(1)]
	pub type FliteSystem = flite::flite_system;

	#[runtime::pallet_index(2)]
	pub type Aura = polkadot_sdk::pallet_aura;

	#[runtime::pallet_index(3)]
	pub type Timestamp = polkadot_sdk::pallet_timestamp;

	#[runtime::pallet_index(4)]
	pub type Balances = polkadot_sdk::pallet_balances;

	#[runtime::pallet_index(5)]
	pub type SimplePallet = simple_pallet;
}

#[runtime_version]
pub const VERSION: RuntimeVersion = RuntimeVersion {
	spec_name: alloc::borrow::Cow::Borrowed("flite-test-runtime"),
	impl_name: alloc::borrow::Cow::Borrowed("flite-test-runtime"),
	authoring_version: 1,
	spec_version: 265,
	impl_version: 1,
	apis: RUNTIME_API_VERSIONS,
	transaction_version: 1,
	system_version: 1,
};

parameter_types! {
	pub const BlockTime: flite::types::Moment = 6000;
	pub const BlockWeight: Weight = Weight::from_parts(
		BlockTime::get() / 6 * WEIGHT_REF_TIME_PER_MILLIS,
		WEIGHT_PROOF_SIZE_PER_MB * 2,
	);
	pub const Version: RuntimeVersion = VERSION;
}
pub struct Configuration;
impl flite::FliteConfigurations for Configuration {
	type BlockLength = ConstU32<{ 5 * 1024 * 1024 }>;
	type BlockWeight = BlockWeight;
	type BlockTime = BlockTime;
	type Ss58 = ConstU16<42>;
	type Version = Version;
	type MinimumBalance = ConstU128<1_000_000>;
}

use flite::default_configs::FliteFrameSystem;

#[derive_impl(FliteFrameSystem<Configuration>)]
impl frame_system::Config for Runtime {
	type Block = Block;
}

impl flite::flite_system::Config for Runtime {}

use flite::default_configs::{FliteTimestamp, FliteTimestampDefaultConfig};
#[derive_impl(FliteTimestamp<Configuration>)]
impl polkadot_sdk::pallet_timestamp::Config for Runtime {
	type OnTimestampSet = Aura;
}

use flite::default_configs::{FliteAura, FliteAuraDefaultConfig};
#[derive_impl(FliteAura<Configuration>)]
impl polkadot_sdk::pallet_aura::Config for Runtime {}

use flite::default_configs::{FliteBalances, FliteBalancesDefaultConfig};

#[derive_impl(FliteBalances<Configuration>)]
impl polkadot_sdk::pallet_balances::Config for Runtime {
	// special inject
	type AccountStore = System;
	type FreezeIdentifier = Self::RuntimeFreezeReason;
}

impl simple_pallet::Config for Runtime {
	type AdvanceCurrency = Balances;
}

type SignedExtensions = (
	// more extensions can be added by the user.
	frame::runtime::types_common::SystemTransactionExtensionsOf<Runtime>,
);

type Block = flite::types::BlockOf<Runtime, SignedExtensions>;
type Header = HeaderFor<Runtime>;

type RuntimeExecutive =
	Executive<Runtime, Block, frame_system::ChainContext<Runtime>, Runtime, AllPalletsWithSystem>;
type AccountId = <Runtime as frame_system::Config>::AccountId;
type Nonce = <Runtime as frame_system::Config>::Nonce;

impl_runtime_apis! {
	impl apis::Core<Block> for Runtime {
		fn version() -> RuntimeVersion {
			VERSION
		}

		fn execute_block(block: Block) {
			RuntimeExecutive::execute_block(block)
		}

		fn initialize_block(header: &Header) -> ExtrinsicInclusionMode {
			RuntimeExecutive::initialize_block(header)
		}
	}
	impl apis::Metadata<Block> for Runtime {
		fn metadata() -> OpaqueMetadata {
			OpaqueMetadata::new(Runtime::metadata().into())
		}

		fn metadata_at_version(version: u32) -> Option<OpaqueMetadata> {
			Runtime::metadata_at_version(version)
		}

		fn metadata_versions() -> Vec<u32> {
			Runtime::metadata_versions()
		}
	}

	impl apis::BlockBuilder<Block> for Runtime {
		fn apply_extrinsic(extrinsic: ExtrinsicFor<Runtime>) -> ApplyExtrinsicResult {
			RuntimeExecutive::apply_extrinsic(extrinsic)
		}

		fn finalize_block() -> HeaderFor<Runtime> {
			RuntimeExecutive::finalize_block()
		}

		fn inherent_extrinsics(data: InherentData) -> Vec<ExtrinsicFor<Runtime>> {
			data.create_extrinsics()
		}

		fn check_inherents(
			block: Block,
			data: InherentData,
		) -> CheckInherentsResult {
			data.check_extrinsics(&block)
		}
	}

	impl apis::TaggedTransactionQueue<Block> for Runtime {
		fn validate_transaction(
			source: TransactionSource,
			tx: ExtrinsicFor<Runtime>,
			block_hash: <Runtime as frame_system::Config>::Hash,
		) -> TransactionValidity {
			RuntimeExecutive::validate_transaction(source, tx, block_hash)
		}
	}

	impl apis::OffchainWorkerApi<Block> for Runtime {
		fn offchain_worker(header: &HeaderFor<Runtime>) {
			RuntimeExecutive::offchain_worker(header)
		}
	}

	impl apis::SessionKeys<Block> for Runtime {
		fn generate_session_keys(_seed: Option<Vec<u8>>) -> Vec<u8> {
			Default::default()
		}

		fn decode_session_keys(
			_encoded: Vec<u8>,
		) -> Option<Vec<(Vec<u8>, apis::KeyTypeId)>> {
			Default::default()
		}
	}

	impl apis::AccountNonceApi<Block, AccountId, Nonce> for Runtime {
		fn account_nonce(account: AccountId) -> Nonce {
			System::account_nonce(account)
		}
	}

	impl sp_genesis_builder::GenesisBuilder<Block> for Runtime {
		fn build_state(config: Vec<u8>) -> GenesisBuilderResult {
			build_state::<RuntimeGenesisConfig>(config)
		}

		fn get_preset(id: &Option<sp_genesis_builder::PresetId>) -> Option<Vec<u8>> {
			get_preset::<RuntimeGenesisConfig>(id, |_| None)
		}

		fn preset_names() -> Vec<sp_genesis_builder::PresetId> {
			vec![]
		}
	}
}
