const ethers = require("ethers");
const fs = require("fs-extra"); // reads abi and bin files

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "HTTP://172.26.240.1:7545"
  );
  const wallet = new ethers.Wallet(
    "c91a0f9f281aa39338cecba8ff4758c4c1fb5c84a9268181ea25ca765824721a",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy(); // Tell code to stop and wait for code to deploy
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
