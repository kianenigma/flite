#![cfg_attr(not(feature = "std"), no_std)]

extern crate alloc;
use alloc::vec::Vec;
use polkadot_sdk::polkadot_sdk_frame::{self as frame, prelude::*, runtime::prelude::*};

// #[runtime_version]
// pub const VERSION: RuntimeVersion = RuntimeVersion {
//     spec_name: create_runtime_str!("flite-test-runtime"),
//     impl_name: create_runtime_str!("flite-test-runtime"),
//     authoring_version: 1,
//     spec_version: 265,
//     impl_version: 1,
//     apis: RUNTIME_API_VERSIONS,
//     transaction_version: 1,
//     state_version: 1,
// };

#[polkadot_sdk::frame_support::runtime]
pub mod runtime {
    use super::*;
    #[runtime::runtime]
    #[runtime::derive(
        RuntimeCall,
        RuntimeEvent,
        RuntimeError,
        RuntimeOrigin,
        RuntimeFreezeReason,
        RuntimeHoldReason,
        RuntimeSlashReason,
        RuntimeLockId,
        RuntimeTask
    )]
    pub struct Runtime;

    #[runtime::pallet_index(0)]
    pub type System = frame_system;

    // #[runtime::pallet_index(1)]
    // pub type FliteSystem = flite::flite_system;
}

#[derive_impl(flite::default_configs::FliteFrameSystem as frame_system::DefaultConfig)]
impl frame_system::Config for Runtime {
    type Block = flite::types::BlockOf<Self>;
}

// #[derive_impl(flite::default_configs::FliteDefaults as flite::flite_system::DefaultConfig)]
// impl flite::flite_system::Config for Runtime {}
