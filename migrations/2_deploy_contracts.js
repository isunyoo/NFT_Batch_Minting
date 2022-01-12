const NFT = artifacts.require("NFT")

module.exports = async function (deployer) {
    // const IPFS_IMAGE_METADATA_URI = `ipfs://QmQdPYTY8yArgVmMJK319e75rsi91bwtUF5JsSF9CLnEYe/`
    const IPFS_IMAGE_METADATA_URI = `ipfs://QmQAeKxmLVk5XJAwL6FhRCB4Pjk3AN8aEEktt3fAwYJdwY/`

    await deployer.deploy(
        NFT,
        "Famous Paintings",
        "PAINT",
        IPFS_IMAGE_METADATA_URI
    )
}