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
//! - [ ] Less Generic types
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
#![cfg_attr(not(feature = "std"), no_std)]

use polkadot_sdk::polkadot_sdk_frame as frame;

/// The opinionated types that we dictate.
/// [`polkadot_sdk::polkadot_sdk_frame::runtime::types_common`] already defined a lot of such types,
/// so we re-use them as much as possible.
pub mod types {
    pub use polkadot_sdk::polkadot_sdk_frame::runtime::types_common::{
        AccountId, BlockNumber, BlockOf,
    };
    pub type Balance = u128;
}

/// Default configurations for the pallets used.
pub mod default_configs {
    use super::flite_system::Config;
    use super::*;
    use frame::{
        arithmetic::Perbill,
        deps::frame_support::{derive_impl, register_default_impl},
        prelude::*,
        runtime::prelude::*,
    };
    use frame_system::limits::{BlockLength, BlockWeights};
    use polkadot_sdk::{
        frame_support::weights::constants::RocksDbWeight,
        pallet_balances::AccountData,
        sp_weights::constants::{WEIGHT_PROOF_SIZE_PER_MB, WEIGHT_REF_TIME_PER_MILLIS},
    };

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

    #[deprecated(
        note = "This is a placeholder type, you need to provide your own BlockLength before launching, but for testing this will just do fine. An easy option is `flite_system::RuntimeBlockLength<Runtime>`."
    )]
    #[allow(non_camel_case_types)]
    pub type ThisWillCompile_ButYouNeedYourOwn_BlockLength = ();

    pub struct FliteFrameSystem;

    #[derive_impl(
        frame_system::config_preludes::SolochainDefaultConfig,
        no_aggregated_types
    )] // TODO: fml the order of these two matters!
    #[register_default_impl(FliteFrameSystem)]
    impl frame_system::DefaultConfig for FliteFrameSystem {
        type AccountId = types::AccountId;
        type AccountData = AccountData<types::Balance>;
        type DbWeight = RocksDbWeight;
        type SystemWeightInfo = ThisWillCompile_ButYouNeedYourOwn_SystemWeightInfo;
        type SS58Prefix = ThisWillCompile_ButYouWillNeedYourOwn_SS58Prefix;
        type Version = ThisWillCompile_ButYouWillNeedYourOwn_Version;
        type BlockWeights = ThisWillCompile_ButYouNeedYourOwn_BlockWeights;
        type BlockLength = ThisWillCompile_ButYouNeedYourOwn_BlockLength;
    }

    parameter_types! {
        pub const DefaultBlockWeight: Weight = Weight::from_parts(
            WEIGHT_REF_TIME_PER_MILLIS * 500,
            WEIGHT_PROOF_SIZE_PER_MB * 2
        );
        pub const DefaultBlockLength: u32 = 5 * 1024 * 1024;
    }

    // pub struct FliteSystem;

    // #[derive_impl(crate::default_configs::FliteFrameSystem as frame_system::DefaultConfig, no_aggregated_types)]
    // impl frame_system::DefaultConfig for FliteSystem {}

    // #[register_default_impl(FliteSystem)]
    // impl flite_system::DefaultConfig for FliteSystem {
    //     type BlockWeight = DefaultBlockWeight;
    //     type BlockLength = DefaultBlockLength;
    // }
}

#[frame::pallet]
pub mod flite_system {
    use super::*;
    use frame::prelude::*;

    #[pallet::config]
    pub trait Config: polkadot_sdk::frame_system::Config {
        type BlockWeight: Get<Weight>;
        type BlockLength: Get<u32>;
    }

    #[pallet::pallet]
    pub struct Pallet<T>(_);
}

#[frame::pallet]
pub mod user_pallet {
    use super::*;
    use frame::prelude::*;

    #[pallet::config]
    #[pallet::disable_frame_system_supertrait_check]
    pub trait Config: flite_system::Config {}

    #[pallet::pallet]
    pub struct Pallet<T>(_);
}
