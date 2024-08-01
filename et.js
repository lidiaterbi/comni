const { ethers } = require('ethers');

async function fetchRemoveLiquidityEvents(contract) {
    try {
        // Replace 'eventName' with the actual name of the event emitted by your contract
        const removeLiquidityEvents = await contract.queryFilter('eventName');
        
        // Process the events
        removeLiquidityEvents.forEach(event => {
            // Access event data
            const { args, blockNumber, transactionHash } = event;
            console.log(`Event found in block ${blockNumber}:`);
            console.log(`Transaction hash: ${transactionHash}`);
            console.log(`Event arguments: ${JSON.stringify(args)}`);
            console.log('---------------------------');
        });

        return removeLiquidityEvents; // Optionally return the events array
    } catch (error) {
        console.error('Error fetching events:', error);
        return []; // Handle errors gracefully
    }
}

// Example usage:
const contractAddress = '0x...'; // Replace with your contract address
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
const contract = new ethers.Contract(contractAddress, abi, provider);

fetchRemoveLiquidityEvents(contract)
    .then(events => {
        // Do something with the events if needed
    })
    .catch(error => console.error('Error in main function:', error));
