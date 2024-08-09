//! FRAME, but opinionated af.
//!
//! > This is an experimental library, build on top of [`frame-system`]
//!
//! ## Overview
//!
//! - [ ] Provide many pallets together, a `super-pallet` system.
//!     - Timestamp
//!     - Randomness
//!     - Aura
//!     - Authorship
//! - [ ] More helper function
//! - [ ] Less Generic types: No `T::BlockNumberFor`, No `T::AccountId`, No `RuntimeOrigin`.
//! - [ ] Parachain ready
//!
//! ## Realization
//!
//! * `#[pallet::disable_frame_system_supertrait_check]`, the fact that you can build a FRAME pallet
//! that is not reliant on `frame-system`. Our `frame-system` is pretty opinionated, and in a very
//! specific way.
//! * _Constrained associated types in Rust_.
//! * `derive_impl` outside of the pallet context.
//! * You *don't need* a runtime template.
//!
//!
//! ## Aux Tools
//!
//! - cargo-generate
//!
//! ## Dependencies
//!
//! This work is dependent on the following PR(s)
//! - https://github.com/paritytech/polkadot-sdk/pull/5246
#![cfg_attr(not(feature = "std"), no_std)]

use polkadot_sdk::{self as psdk, polkadot_sdk_frame as frame};

/// The opinionated types that we dictate.
/// [`polkadot_sdk::polkadot_sdk_frame::runtime::types_common`] already defined a lot of such types,
/// so we re-use them as much as possible.
pub mod types {
	pub use polkadot_sdk::polkadot_sdk_frame::runtime::types_common::{
		AccountId, BlockNumber, BlockOf,
	};
	pub type Balance = u128;
	pub type Moment = u64;
}

/// Default configurations for the pallets used.
pub mod default_configs {
	use super::*;
	use flite_system::Config;
	use frame::{
		arithmetic::Perbill,
		deps::frame_support::{derive_impl, register_default_impl},
		prelude::*,
		runtime::prelude::*,
	};
	use frame_system::limits::{BlockLength, BlockWeights};
	use psdk::{
		frame_support::weights::constants::RocksDbWeight,
		pallet_balances::AccountData,
		sp_weights::constants::{WEIGHT_PROOF_SIZE_PER_MB, WEIGHT_REF_TIME_PER_MILLIS},
	};

	#[register_default_impl(FliteSystem)]
	impl flite_system::DefaultConfig for FliteSystem {
		type BlockWeight = DefaultBlockWeight;
		type BlockLength = DefaultBlockLength;
		type BlockTime = BlockTime;
	}

	pub struct RuntimeBlockWeights<T: Config>(core::marker::PhantomData<T>);
	impl<T: Config> Get<BlockWeights> for RuntimeBlockWeights<T> {
		fn get() -> BlockWeights {
			// TODO: hypothetically, we should use very safe and sane and audited values here, but
			// for now we go with a simple model. Use Operational later.
			BlockWeights::with_sensible_defaults(T::BlockWeight::get(), Perbill::one())
		}
	}

	pub struct RuntimeBlockLength<T: Config>(core::marker::PhantomData<T>);
	impl<T: Config> Get<BlockLength> for RuntimeBlockLength<T> {
		fn get() -> BlockLength {
			BlockLength::max(<T as flite_system::Config>::BlockLength::get())
		}
	}

	#[deprecated(
		note = "This is a placeholder type, you need to provide your own weights before launching, but for testing this will just do fine."
	)]
	#[allow(non_camel_case_types)]
	pub type ThisWillCompile_ButYouNeedYourOwn_SystemWeightInfo = ();

	#[deprecated(
		note = "This is a placeholder type, you need to provide your own SS58Prefix before launching, but for testing this will just do fine."
	)]
	#[allow(non_camel_case_types)]
	pub type ThisWillCompile_ButYouWillNeedYourOwn_SS58Prefix = ();

	#[deprecated(
		note = "This is a placeholder type, you need to provide your own Version before launching, but for testing this will just do fine."
	)]
	#[allow(non_camel_case_types)]
	pub type ThisWillCompile_ButYouWillNeedYourOwn_Version = ();

	#[deprecated(
		note = "This is a placeholder type, you need to provide your own BlockWeights before launching, but for testing this will just do fine. An easy option is `flite_system::RuntimeBlockWeights<Runtime>`."
	)]
	#[allow(non_camel_case_types)]
	pub type ThisWillCompile_ButYouNeedYourOwn_BlockWeights = ();

	// TODO: I kinda donno how this work in the `runtime` if I am being honest.
	#[deprecated(
		note = "This is a placeholder type, you need to provide your own BlockLength before launching, but for testing this will just do fine. An easy option is `flite_system::RuntimeBlockLength<Runtime>`."
	)]
	#[allow(non_camel_case_types)]
	pub type ThisWillCompile_ButYouNeedYourOwn_BlockLength = ();

	pub struct FliteFrameSystem;

	// #[derive_impl(
	//     frame_system::config_preludes::SolochainDefaultConfig,
	//     no_aggregated_types
	// )]
	// TODO: fml the order of these two matters! Perhaps explore nested derive impl again, but it
	// seems to hairy for now.
	#[register_default_impl(FliteFrameSystem)]
	impl frame_system::DefaultConfig for FliteFrameSystem {
		/// Flite might decide to force its users to
		type SystemWeightInfo = weights::FliteFrameSystemWeights;
		type SS58Prefix = ThisWillCompile_ButYouWillNeedYourOwn_SS58Prefix;
		type Version = ThisWillCompile_ButYouWillNeedYourOwn_Version;
		type BlockWeights = ThisWillCompile_ButYouNeedYourOwn_BlockWeights;
		type BlockLength = ThisWillCompile_ButYouNeedYourOwn_BlockLength;

		// opinionated
		type AccountId = types::AccountId;
		type AccountData = AccountData<types::Balance>;
		type DbWeight = RocksDbWeight;
		type Nonce = u32;
		type Hash = psdk::sp_core::hash::H256;
		type Hashing = psdk::sp_runtime::traits::BlakeTwo256;
		// TODO: this is super pesky and causes very hard compiler errors, if we add the second
		// parameter wrt. account index. Make sure to elaborate on this.
		type Lookup = psdk::sp_runtime::traits::AccountIdLookup<Self::AccountId, ()>;
		type MaxConsumers = psdk::frame_support::traits::ConstU32<128>;
		type BaseCallFilter = psdk::frame_support::traits::Everything;
		type BlockHashCount = psdk::frame_support::traits::ConstU32<256>;

		// trivial
		type OnSetCode = ();
		type SingleBlockMigrations = ();
		type MultiBlockMigrator = ();
		type PreInherents = ();
		type PostInherents = ();
		type PostTransactions = ();
		type OnNewAccount = ();
		type OnKilledAccount = ();

		// injected
		#[inject_runtime_type]
		type RuntimeEvent = ();
		#[inject_runtime_type]
		type RuntimeOrigin = ();
		#[inject_runtime_type]
		type RuntimeCall = ();
		#[inject_runtime_type]
		type RuntimeTask = ();
		#[inject_runtime_type]
		type PalletInfo = ();
	}

	parameter_types! {
		pub const DefaultBlockWeight: Weight = Weight::from_parts(
			WEIGHT_REF_TIME_PER_MILLIS * 500,
			WEIGHT_PROOF_SIZE_PER_MB * 2
		);
		pub const DefaultBlockLength: u32 = 5 * 1024 * 1024;
		pub const BlockTime: types::Moment = 6000;
	}

	pub struct FliteSystem;

	#[derive_impl(crate::default_configs::FliteFrameSystem as frame_system::DefaultConfig, no_aggregated_types)]
	impl frame_system::DefaultConfig for FliteSystem {}

	/// Default for [`polkadot_sdk::pallet_timestamp`]
	///
	/// This pallet provides [`polkadot_sdk::pallet_timestamp::DefaultConfig`], but we don't use it
	/// because the trick we pull below wrt `OnTimeStampSet` will not work otherwise.
	pub struct FliteTimestamp;

	#[derive_impl(FliteFrameSystem as frame_system::DefaultConfig, no_aggregated_types)]
	impl frame_system::DefaultConfig for FliteTimestamp {}

	#[derive_impl(FliteSystem as flite_system::DefaultConfig, no_aggregated_types)]
	impl flite_system::DefaultConfig for FliteTimestamp {}

	pub trait FliteTimestampDefaultConfig {
		/// See [`polkadot_sdk::pallet_timestamp::Config::Moment`].
		type Moment;
		/// See [`polkadot_sdk::pallet_timestamp::Config::OnTimeStampSet`].
		type OnTimestampSet;
		/// See [`polkadot_sdk::pallet_timestamp::Config::MinimumPeriod`].
		type MinimumPeriod;
		/// See [`polkadot_sdk::pallet_timestamp::Config::WeightInfo`].
		type WeightInfo;
	}

	#[deprecated(
		note = "This is a placeholder type, you need to replace it with the name assigned to `pallet_aura`."
	)]
	pub struct ReplaceWithAuraPalletName;

	#[register_default_impl(FliteTimestamp)]
	impl FliteTimestampDefaultConfig for FliteTimestamp {
		type Moment = types::Moment;
		// #[inject_custom_runtime_type("Aura")] -> should replace it with `Type OnTimestampSet =
		// Aura` in the runtime.
		type OnTimestampSet = ReplaceWithAuraPalletName;
		// We can use
		type MinimumPeriod = <FliteSystem as flite_system::DefaultConfig>::BlockTime;
		type WeightInfo = weights::FliteTimestampWeights;
	}

	pub struct FliteAura;
	#[derive_impl(FliteFrameSystem as frame_system::DefaultConfig, no_aggregated_types)]
	impl frame_system::DefaultConfig for FliteAura {}

	#[derive_impl(FliteSystem as flite_system::DefaultConfig, no_aggregated_types)]
	impl flite_system::DefaultConfig for FliteAura {}

	// Some pallets in FRAME do not yet expose this `DefaultConfig` trait. No issue though, you can
	// use these macros on top of any trait! Pitfalls: If you decide to attempt to impl defaults for
	// `Config` of a pallet directly, you don't have `no_defaults`.

	/// A `flite` representative of `pallet_aura::Config`.
	///
	/// This merely exists because `pallet_aura` itself doesn't have
	/// `#[pallet::config(with_default)]`.
	///
	/// We drop all most trait bounds, as we test it and we are professional.
	pub trait FliteAuraDefaultConfig {
		/// See [`polkadot_skd::pallet_aura::Config::AuthorityId`].
		type AuthorityId;
		/// See [`polkadot_skd::pallet_aura::Config::MaxAuthorities`].
		type MaxAuthorities;
		/// See [`polkadot_skd::pallet_aura::Config::DisabledValidators`].
		type DisabledValidators;
		/// See [`polkadot_skd::pallet_aura::Config::AllowMultipleBlocksPerSlot`].
		type AllowMultipleBlocksPerSlot;
		/// See [`polkadot_skd::pallet_aura::Config::SlotDuration`].
		type SlotDuration;
	}

	#[register_default_impl(FliteAura)]
	impl FliteAuraDefaultConfig for FliteAura {
		type AuthorityId = psdk::sp_consensus_aura::sr25519::AuthorityId;
		type DisabledValidators = ();
		type MaxAuthorities = psdk::frame_support::traits::ConstU32<1024>;
		// NOTE: in a parachain, this has to be `true`.
		type AllowMultipleBlocksPerSlot = psdk::frame_support::traits::ConstBool<false>;
		type SlotDuration = <FliteSystem as flite_system::DefaultConfig>::BlockTime;
	}
}

/// Flite provides a set of weights for its users. Technically, this should be something like a
/// well-benchmarked, audited set of weights that are safe to use.
///
/// For now, given that this is just for demonstration purposes, I will use the fact that all FRAME
/// pallet weights are implemented for `()`.
pub mod weights {
	pub type FliteDbWeights = ();
	pub type FliteFrameSystemWeights = ();
	pub type FliteTimestampWeights = ();
	pub type FliteAuraWeights = ();
}

#[frame::pallet]
pub mod flite_system {
	use super::*;
	use frame::prelude::*;

	/// Flite puts a lot of restrictions on what types are fed to account Id. All of this is fine as
	/// long as the users use the provided [`config_preludes::FliteFrameSystem`].
	#[pallet::config(with_default)]
	pub trait Config:
		polkadot_sdk::frame_system::Config<AccountId = types::AccountId>
		+ psdk::pallet_timestamp::Config
		+ psdk::pallet_aura::Config
	{
		type BlockWeight: Get<Weight>;
		type BlockLength: Get<u32>;
		type BlockTime: Get<types::Moment>;
	}

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	impl<T: Config> Pallet<T> {
		fn block_author() {
			todo!("A useful helper function for flite to provide");
		}
	}
	#[pallet::hooks]
	impl<T: Config> Hooks<BlockNumberFor<T>> for Pallet<T> {
		fn integrity_test() {
			// Important for this pallet to have triple-A integrity checks to make sure all of the
			// configs are correct. Esp. If the user overrides some but not all, this can be quite
			// hairy.
		}
	}
}
