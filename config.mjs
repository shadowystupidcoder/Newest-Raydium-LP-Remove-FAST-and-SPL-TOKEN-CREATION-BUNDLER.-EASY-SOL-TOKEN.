import { Keypair } from "@solana/web3.js"
export const privateKey = "5o26tnWZxJzWwyoDRawHLsFzroNSJFUxyzBcrpSmenQXC1WWnhmEK368SZ65Hyy2Grp..." // OR "[123, 123, 123, ...]"
export const rpcUrl = "https://mainnet.helius-rpc.com/?api-key=ee399b7e-ff38-44c9-803b-958fa32ef924" // RPC URL
export const jitoTip = 0.001 // amount in SOL


// lp or token mint (only used for the remove LP script)
export const lpMintOrTokenMint = "28j3EfKpqRoKF3jr7rHKya6BWi7DDf2URQgQBwyKbTfZ" // LP MINT OR TOKEN MINT (NOT WSOL, THE OTHER TOKEN OF THE PAIR)



// token config (only used for the createTokenBundle script)
//export const mintKeypairOrGenerate = Keypair.fromSecretKey(Uint8Array.from([123, 123, 123, ...])) 
export const mintKeypairOrGenerate = Keypair.generate()
export const name = "test"
export const symbol = "test"
export const description = "test"
export const image = "./image.png"
export const twitter = "https://x.com/"
export const telegram = "https://t.me/"
export const website = "https://example.com"
