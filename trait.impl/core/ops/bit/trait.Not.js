(function() {
    var implementors = Object.fromEntries([["alloy_primitives",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"enum\" href=\"alloy_primitives/enum.Sign.html\" title=\"enum alloy_primitives::Sign\">Sign</a>"],["impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"alloy_primitives/struct.Signed.html\" title=\"struct alloy_primitives::Signed\">Signed</a>&lt;BITS, LIMBS&gt;"]]],["bitvec",[["impl&lt;'a, T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;'a mut <a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;A, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"bitvec/array/struct.BitArray.html\" title=\"struct bitvec::array::BitArray\">BitArray</a>&lt;A, O&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"bitvec/view/trait.BitViewSized.html\" title=\"trait bitvec::view::BitViewSized\">BitViewSized</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;M, T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"bitvec/ptr/struct.BitRef.html\" title=\"struct bitvec::ptr::BitRef\">BitRef</a>&lt;'_, M, T, O&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"bitvec/ptr/trait.Mutability.html\" title=\"trait bitvec::ptr::Mutability\">Mutability</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"bitvec/index/struct.BitMask.html\" title=\"struct bitvec::index::BitMask\">BitMask</a>&lt;R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,</div>"],["impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"],["impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</div>"]]],["crypto_bigint",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"crypto_bigint/struct.Limb.html\" title=\"struct crypto_bigint::Limb\">Limb</a>"],["impl&lt;const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"crypto_bigint/struct.Uint.html\" title=\"struct crypto_bigint::Uint\">Uint</a>&lt;LIMBS&gt;"],["impl&lt;const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.Uint.html\" title=\"struct crypto_bigint::Uint\">Uint</a>&lt;LIMBS&gt;&gt;"]]],["enumflags2",[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"enumflags2/struct.BitFlags.html\" title=\"struct enumflags2::BitFlags\">BitFlags</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"enumflags2/trait.BitFlag.html\" title=\"trait enumflags2::BitFlag\">BitFlag</a>,</div>"]]],["ethereum_types",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"ethereum_types/struct.U64.html\" title=\"struct ethereum_types::U64\">U64</a>"]]],["frame_support",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"frame_support/traits/tokens/struct.WithdrawReasons.html\" title=\"struct frame_support::traits::tokens::WithdrawReasons\">WithdrawReasons</a>"]]],["num_bigint",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>"]]],["pallet_broker",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"pallet_broker/struct.CoreMask.html\" title=\"struct pallet_broker::CoreMask\">CoreMask</a>"]]],["pallet_contracts_uapi",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"pallet_contracts_uapi/struct.CallFlags.html\" title=\"struct pallet_contracts_uapi::CallFlags\">CallFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"pallet_contracts_uapi/struct.ReturnFlags.html\" title=\"struct pallet_contracts_uapi::ReturnFlags\">ReturnFlags</a>"]]],["pallet_identity",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"enum\" href=\"pallet_identity/legacy/enum.IdentityField.html\" title=\"enum pallet_identity::legacy::IdentityField\">IdentityField</a>"]]],["pallet_nfts",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"enum\" href=\"pallet_nfts/enum.CollectionRole.html\" title=\"enum pallet_nfts::CollectionRole\">CollectionRole</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"enum\" href=\"pallet_nfts/enum.CollectionSetting.html\" title=\"enum pallet_nfts::CollectionSetting\">CollectionSetting</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"enum\" href=\"pallet_nfts/enum.ItemSetting.html\" title=\"enum pallet_nfts::ItemSetting\">ItemSetting</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"enum\" href=\"pallet_nfts/enum.PalletFeature.html\" title=\"enum pallet_nfts::PalletFeature\">PalletFeature</a>"]]],["pallet_revive_uapi",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"pallet_revive_uapi/struct.CallFlags.html\" title=\"struct pallet_revive_uapi::CallFlags\">CallFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"pallet_revive_uapi/struct.ReturnFlags.html\" title=\"struct pallet_revive_uapi::ReturnFlags\">ReturnFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"pallet_revive_uapi/struct.StorageFlags.html\" title=\"struct pallet_revive_uapi::StorageFlags\">StorageFlags</a>"]]],["primitive_types",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"primitive_types/struct.U128.html\" title=\"struct primitive_types::U128\">U128</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"primitive_types/struct.U256.html\" title=\"struct primitive_types::U256\">U256</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"primitive_types/struct.U512.html\" title=\"struct primitive_types::U512\">U512</a>"]]],["ruint",[["impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"ruint/struct.Bits.html\" title=\"struct ruint::Bits\">Bits</a>&lt;BITS, LIMBS&gt;"],["impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"ruint/struct.Uint.html\" title=\"struct ruint::Uint\">Uint</a>&lt;BITS, LIMBS&gt;"],["impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"ruint/struct.Bits.html\" title=\"struct ruint::Bits\">Bits</a>&lt;BITS, LIMBS&gt;"],["impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"ruint/struct.Uint.html\" title=\"struct ruint::Uint\">Uint</a>&lt;BITS, LIMBS&gt;"]]],["safe_arch",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"safe_arch/struct.m128.html\" title=\"struct safe_arch::m128\">m128</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"safe_arch/struct.m128d.html\" title=\"struct safe_arch::m128d\">m128d</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"safe_arch/struct.m128i.html\" title=\"struct safe_arch::m128i\">m128i</a>"]]],["scale_info",[]],["simba",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">16</a>]&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">1</a>]&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">32</a>]&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"simba/simd/struct.WideBoolF32x4.html\" title=\"struct simba::simd::WideBoolF32x4\">WideBoolF32x4</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"simba/simd/struct.WideBoolF32x8.html\" title=\"struct simba::simd::WideBoolF32x8\">WideBoolF32x8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"simba/simd/struct.WideBoolF64x4.html\" title=\"struct simba::simd::WideBoolF64x4\">WideBoolF64x4</a>"]]],["sp_core",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"sp_core/offchain/struct.Capabilities.html\" title=\"struct sp_core::offchain::Capabilities\">Capabilities</a>"]]],["sp_runtime",[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a>&lt;Output = T&gt;, D: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"sp_runtime/type_with_default/struct.TypeWithDefault.html\" title=\"struct sp_runtime::type_with_default::TypeWithDefault\">TypeWithDefault</a>&lt;T, D&gt;"]]],["sp_std",[]],["subtle",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"subtle/struct.Choice.html\" title=\"struct subtle::Choice\">Choice</a>"]]],["typenum",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>"]]],["wide",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"wide/struct.f32x4.html\" title=\"struct wide::f32x4\">f32x4</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"wide/struct.i16x16.html\" title=\"struct wide::i16x16\">i16x16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"wide/struct.i16x8.html\" title=\"struct wide::i16x8\">i16x8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"wide/struct.i32x4.html\" title=\"struct wide::i32x4\">i32x4</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"wide/struct.i64x2.html\" title=\"struct wide::i64x2\">i64x2</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"wide/struct.i8x16.html\" title=\"struct wide::i8x16\">i8x16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"wide/struct.i8x32.html\" title=\"struct wide::i8x32\">i8x32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"wide/struct.u16x16.html\" title=\"struct wide::u16x16\">u16x16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"wide/struct.u16x8.html\" title=\"struct wide::u16x8\">u16x8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"wide/struct.u32x4.html\" title=\"struct wide::u32x4\">u32x4</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"wide/struct.u64x2.html\" title=\"struct wide::u64x2\">u64x2</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for &amp;<a class=\"struct\" href=\"wide/struct.u8x16.html\" title=\"struct wide::u8x16\">u8x16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.f32x4.html\" title=\"struct wide::f32x4\">f32x4</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.f32x8.html\" title=\"struct wide::f32x8\">f32x8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.f64x2.html\" title=\"struct wide::f64x2\">f64x2</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.f64x4.html\" title=\"struct wide::f64x4\">f64x4</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.i16x16.html\" title=\"struct wide::i16x16\">i16x16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.i16x8.html\" title=\"struct wide::i16x8\">i16x8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.i32x4.html\" title=\"struct wide::i32x4\">i32x4</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.i32x8.html\" title=\"struct wide::i32x8\">i32x8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.i64x2.html\" title=\"struct wide::i64x2\">i64x2</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.i64x4.html\" title=\"struct wide::i64x4\">i64x4</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.i8x16.html\" title=\"struct wide::i8x16\">i8x16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.i8x32.html\" title=\"struct wide::i8x32\">i8x32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.u16x16.html\" title=\"struct wide::u16x16\">u16x16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.u16x8.html\" title=\"struct wide::u16x8\">u16x8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.u32x4.html\" title=\"struct wide::u32x4\">u32x4</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.u32x8.html\" title=\"struct wide::u32x8\">u32x8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.u64x2.html\" title=\"struct wide::u64x2\">u64x2</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.u64x4.html\" title=\"struct wide::u64x4\">u64x4</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"wide/struct.u8x16.html\" title=\"struct wide::u8x16\">u8x16</a>"]]],["zerocopy",[["impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I128.html\" title=\"struct zerocopy::byteorder::I128\">I128</a>&lt;O&gt;"],["impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I16.html\" title=\"struct zerocopy::byteorder::I16\">I16</a>&lt;O&gt;"],["impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I32.html\" title=\"struct zerocopy::byteorder::I32\">I32</a>&lt;O&gt;"],["impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I64.html\" title=\"struct zerocopy::byteorder::I64\">I64</a>&lt;O&gt;"],["impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U128.html\" title=\"struct zerocopy::byteorder::U128\">U128</a>&lt;O&gt;"],["impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U16.html\" title=\"struct zerocopy::byteorder::U16\">U16</a>&lt;O&gt;"],["impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U32.html\" title=\"struct zerocopy::byteorder::U32\">U32</a>&lt;O&gt;"],["impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Not.html\" title=\"trait core::ops::bit::Not\">Not</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U64.html\" title=\"struct zerocopy::byteorder::U64\">U64</a>&lt;O&gt;"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[794,3417,1172,441,273,336,528,285,602,315,1107,874,793,1986,757,18,3635,298,633,14,258,502,7461,2253]}