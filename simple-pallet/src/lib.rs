#![cfg_attr(not(feature = "std"), no_std)]

use polkadot_sdk::polkadot_sdk_frame::{self as frame, prelude::*};

#[frame::pallet]
pub mod pallet {
	use super::*;

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	#[pallet::config]
	#[pallet::disable_frame_system_supertrait_check]
	pub trait Config: flite::flite_system::Config {}

	#[pallet::call]
	impl<T: Config> Pallet<T> {
		#[pallet::weight(0)]
		pub fn dispatching(origin: OriginFor<T>) -> DispatchResult {
			// Yes, the account id type is no longer generic, because `flite` uses constrained
			// associated types.
			let sender: flite::types::AccountId = ensure_signed(origin)?;

			Ok(())
		}
	}
}
