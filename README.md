# FLITE

> 📐 FLITE: FRAME, but lower on the dose of complexity, ergo lite. Part of Polkadot-SDK

This repo is a demo of how a much simpler variant of FRAME can be built, solely using existing
abstractions.

- `flite` is one such crate. It is an opinionated replacement for `frame_system`, and a set of
  defaults for a number of other pallets.
- `simple_pallet` is a demonstration of how a new pallet can be built using `flite` instead of
  `frame_system`.
- `runtime` is a runtime containing both of the aforementioned.

> [!TIP]
> None of the code provided here is production-ready, but is merely for demonstrating
> techniques. The main audience of this is educators and creative builders in the Polkadot
> ecosystem.
