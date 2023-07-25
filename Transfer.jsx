import React from "react"
import { useWallet, useTransfer, useBalance } from "@connect2ic/react"
import { Actor } from "@dfinity/agent"
import {
  idlFactory as myCanister_idl,
  canisterId as myCanister_id,
} from "/home/anon/ic-projects/react/lmao2/my-app/src/declarations/counter/counter.did.js"

const Transfer = () => {
  const [wallet] = useWallet()
  const [transfer] = useTransfer({
    to: "47ae92c827afd27260e7c317e1afd1a4915b930cf8639c018ff3fc2863e22ccf",
    amount: Number(0.0001),
  })

  const onPurchase = async () => {
    const { height } = await transfer()

    await myCanister.payed(wallet.getPrincipal(), true)
  }

  // Create an instance of the canister
  const myCanister = Actor.createActor(myCanister_idl, {
    agentOptions: {
      host: "https://icp0.io",
    },
    canisterId: "47d2y-5yaaa-aaaao-ajapa-cai",
  })

  // Call the pay method on the canister instance

  return (
    <div className="example2">
      {wallet ? (
        <>
          <button className="connect-button" onClick={onPurchase}>
            JOIN CLUB
          </button>
        </>
      ) : (
        <p className="example-disabled"></p>
      )}
    </div>
  )
}

export { Transfer }
