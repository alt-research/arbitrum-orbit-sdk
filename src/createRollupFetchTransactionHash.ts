import { Address, PublicClient } from 'viem';
import { AbiEvent } from 'abitype';

import { validateParentChain } from './types/ParentChain';
import {
  mainnet,
  arbitrumOne,
  arbitrumNova,
  sepolia,
  holesky,
  arbitrumSepolia,
  nitroTestnodeL1,
  nitroTestnodeL2,
  nitroTestnodeL3,
} from './chains';

export type CreateRollupFetchTransactionHashParams = {
  rollup: Address;
  publicClient: PublicClient;
};

const RollupInitializedEventAbi: AbiEvent = {
  anonymous: false,
  inputs: [
    {
      indexed: false,
      internalType: 'bytes32',
      name: 'machineHash',
      type: 'bytes32',
    },
    {
      indexed: false,
      internalType: 'uint256',
      name: 'chainId',
      type: 'uint256',
    },
  ],
  name: 'RollupInitialized',
  type: 'event',
};

const earliestRollupCreatorDeploymentBlockNumber = {
  // mainnet
  [mainnet.id]: 18736164n,
  [arbitrumOne.id]: 150599584n,
  [arbitrumNova.id]: 47798739n,
  // testnet
  [sepolia.id]: 4741823n,
  [holesky.id]: 1083992n,
  [arbitrumSepolia.id]: 654628n,
  // local nitro-testnode
  [nitroTestnodeL1.id]: 0n,
  [nitroTestnodeL2.id]: 0n,
  [nitroTestnodeL3.id]: 0n,
};

export async function createRollupFetchTransactionHash({
  rollup,
  publicClient,
}: CreateRollupFetchTransactionHashParams) {
  const chainId = validateParentChain(publicClient);

  console.log(`createRollupFetchTransactionHash: chainId = ${chainId}`);

  const fromBlock =
    chainId in Object.keys(earliestRollupCreatorDeploymentBlockNumber)
      ? earliestRollupCreatorDeploymentBlockNumber[chainId]
      : 'earliest';

  // Find the RollupInitialized event from that Rollup contract
  var transactionHash = "" as `0x${string}`;
  if (fromBlock != 'earliest') {
    const latestBlockNumber = await publicClient.getBlockNumber();
    var rangeStart = fromBlock;
    while (rangeStart < latestBlockNumber) {
      var rangeEnd = rangeStart + BigInt(9_999);
      if (rangeEnd > latestBlockNumber) {
        rangeEnd = latestBlockNumber;
      }
      console.log(`createRollupFetchTransactionHash: getLogs from=${rangeStart} to=${rangeEnd}`);
      const rollupInitializedEvents = await publicClient.getLogs({
        address: rollup,
        event: RollupInitializedEventAbi,
        fromBlock: rangeStart,
        toBlock: rangeEnd,
      });
      if (rollupInitializedEvents.length == 0) {
        rangeStart = rangeEnd + BigInt(1);
      } else if (rollupInitializedEvents.length == 1) {
        // Get the transaction hash that emitted that event
        transactionHash = rollupInitializedEvents[0].transactionHash;
        break;
      } else {
        throw new Error(
          `Expected to find 1 RollupInitialized event for rollup address ${rollup} but found ${rollupInitializedEvents.length}`,
        );
      }
    }
  } else {
    const rollupInitializedEvents = await publicClient.getLogs({
      address: rollup,
      event: RollupInitializedEventAbi,
      fromBlock,
      toBlock: 'latest',
    });
    if (rollupInitializedEvents.length !== 1) {
      throw new Error(
        `Expected to find 1 RollupInitialized event for rollup address ${rollup} but found ${rollupInitializedEvents.length}`,
      );
    }
    // Get the transaction hash that emitted that event
    transactionHash = rollupInitializedEvents[0].transactionHash;
  }

  if (!transactionHash) {
    throw new Error(
      `No transactionHash found in RollupInitialized event for rollup address ${rollup}`,
    );
  }

  return transactionHash;
}
