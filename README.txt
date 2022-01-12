https://github.com/dappuniversity/nft_batch_minting

$ npm install
$ npm install @truffle/hdwallet-provider
$ truffle migrate --reset --compile-all --network development
$ truffle console --network development
truffle(development)> nft = await NFT.deployed()
truffle(development)> await nft.name()
'Famous Paintings'
truffle(development)> await nft.symbol()
'PAINT'
truffle(development)> await nft.mint()
truffle(development)> await nft.walletOfOwner("0x8BB0412fcd5Cb1a190b38db667539cC6301890e1")
truffle(development)> await nft.tokenURI(1)
'ipfs://QmQAeKxmLVk5XJAwL6FhRCB4Pjk3AN8aEEktt3fAwYJdwY/1.json'

$ node scripts/mint.js
$ ipfs daemon
$ hash=`echo "I <3 IPFS -$(whoami)" | ipfs add -q`
$ echo $hash
QmQAeKxmLVk5XJAwL6FhRCB4Pjk3AN8aEEktt3fAwYJdwY
$ ipfs cat /ipfs/QmQAeKxmLVk5XJAwL6FhRCB4Pjk3AN8aEEktt3fAwYJdwY/readme
$ ipfs ls /ipfs/QmQAeKxmLVk5XJAwL6FhRCB4Pjk3AN8aEEktt3fAwYJdwY

https://ipfs.io/ipfs/QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB
http://localhost:8080/ipfs/QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB

$ ipfs ls /ipfs/QmQdPYTY8yArgVmMJK319e75rsi91bwtUF5JsSF9CLnEYe
$ ipfs cat /ipfs/QmQdPYTY8yArgVmMJK319e75rsi91bwtUF5JsSF9CLnEYe/1.json
ipfs://QmQdPYTY8yArgVmMJK319e75rsi91bwtUF5JsSF9CLnEYe/
ipfs://QmThdTBCR8DsnXMViDGC13EH9NughYzJrk7VjaAsRBmhX8/cafe-terrace-at-night.jpg
ipfs://QmThdTBCR8DsnXMViDGC13EH9NughYzJrk7VjaAsRBmhX8/paradise.jpg

$ ipfs resolve -r /ipfs/QmQdPYTY8yArgVmMJK319e75rsi91bwtUF5JsSF9CLnEYe/1.json
$ ipfs resolve -r /ipfs/QmThdTBCR8DsnXMViDGC13EH9NughYzJrk7VjaAsRBmhX8/cafe-terrace-at-night.jpg
$ ipfs resolve -r /ipfs/QmThdTBCR8DsnXMViDGC13EH9NughYzJrk7VjaAsRBmhX8/paradise.jpg