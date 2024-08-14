//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ArbGasInfo
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x000000000000000000000000000000000000006c)
 */
export const arbGasInfoABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAmortizedCostCapBips',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentTxL1GasFees',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getGasAccountingParams',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getGasBacklog',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getGasBacklogTolerance',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getL1BaseFeeEstimate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getL1BaseFeeEstimateInertia',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getL1FeesAvailable',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getL1GasPriceEstimate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getL1PricingSurplus',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getMinimumGasPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getPerBatchGasCharge',
    outputs: [{ name: '', internalType: 'int64', type: 'int64' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getPricesInArbGas',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'aggregator', internalType: 'address', type: 'address' }],
    name: 'getPricesInArbGasWithAggregator',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getPricesInWei',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'aggregator', internalType: 'address', type: 'address' }],
    name: 'getPricesInWeiWithAggregator',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getPricingInertia',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
] as const;

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x000000000000000000000000000000000000006c)
 */
export const arbGasInfoAddress = {
  421614: '0x000000000000000000000000000000000000006C',
} as const;

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x000000000000000000000000000000000000006c)
 */
export const arbGasInfoConfig = { address: arbGasInfoAddress, abi: arbGasInfoABI } as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ArbOwner
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000070)
 */
export const arbOwnerABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'method', internalType: 'bytes4', type: 'bytes4', indexed: true },
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'OwnerActs',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'addChainOwner',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllChainOwners',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getInfraFeeAccount',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getNetworkFeeAccount',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'isChainOwner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'maxWeiToRelease', internalType: 'uint256', type: 'uint256' }],
    name: 'releaseL1PricerSurplusFunds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'ownerToRemove', internalType: 'address', type: 'address' }],
    name: 'removeChainOwner',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'timestamp', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'scheduleArbOSUpgrade',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'cap', internalType: 'uint64', type: 'uint64' }],
    name: 'setAmortizedCostCapBips',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newInfraFeeAccount', internalType: 'address', type: 'address' }],
    name: 'setInfraFeeAccount',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'inertia', internalType: 'uint64', type: 'uint64' }],
    name: 'setL1BaseFeeEstimateInertia',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'pricePerUnit', internalType: 'uint256', type: 'uint256' }],
    name: 'setL1PricePerUnit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'equilibrationUnits', internalType: 'uint256', type: 'uint256' }],
    name: 'setL1PricingEquilibrationUnits',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'inertia', internalType: 'uint64', type: 'uint64' }],
    name: 'setL1PricingInertia',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'weiPerUnit', internalType: 'uint64', type: 'uint64' }],
    name: 'setL1PricingRewardRate',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'setL1PricingRewardRecipient',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'priceInWei', internalType: 'uint256', type: 'uint256' }],
    name: 'setL2BaseFee',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'sec', internalType: 'uint64', type: 'uint64' }],
    name: 'setL2GasBacklogTolerance',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'sec', internalType: 'uint64', type: 'uint64' }],
    name: 'setL2GasPricingInertia',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'limit', internalType: 'uint64', type: 'uint64' }],
    name: 'setMaxTxGasLimit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'priceInWei', internalType: 'uint256', type: 'uint256' }],
    name: 'setMinimumL2BaseFee',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newNetworkFeeAccount', internalType: 'address', type: 'address' }],
    name: 'setNetworkFeeAccount',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'cost', internalType: 'int64', type: 'int64' }],
    name: 'setPerBatchGasCharge',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'limit', internalType: 'uint64', type: 'uint64' }],
    name: 'setSpeedLimit',
    outputs: [],
  },
] as const;

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000070)
 */
export const arbOwnerAddress = {
  421614: '0x0000000000000000000000000000000000000070',
} as const;

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000070)
 */
export const arbOwnerConfig = { address: arbOwnerAddress, abi: arbOwnerABI } as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ArbOwnerPublic
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x000000000000000000000000000000000000006b)
 */
export const arbOwnerPublicABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllChainOwners',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getInfraFeeAccount',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getNetworkFeeAccount',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'isChainOwner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const;

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x000000000000000000000000000000000000006b)
 */
export const arbOwnerPublicAddress = {
  421614: '0x000000000000000000000000000000000000006b',
} as const;

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x000000000000000000000000000000000000006b)
 */
export const arbOwnerPublicConfig = {
  address: arbOwnerPublicAddress,
  abi: arbOwnerPublicABI,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'addedValue', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ type: 'bool' }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RollupCreator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x90d68b056c411015eae3ec0b98ad94e2c91419f1)
 * -
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x06E341073b2749e0Bb9912461351f716DeCDa9b0)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfbd0b034e6305788007f6e0123cc5eae701a5751)
 */
export const rollupCreatorABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"rollupAddress","type":"address"},{"indexed":true,"internalType":"address","name":"nativeToken","type":"address"},{"indexed":false,"internalType":"address","name":"inboxAddress","type":"address"},{"indexed":false,"internalType":"address","name":"outbox","type":"address"},{"indexed":false,"internalType":"address","name":"rollupEventInbox","type":"address"},{"indexed":false,"internalType":"address","name":"challengeManager","type":"address"},{"indexed":false,"internalType":"address","name":"adminProxy","type":"address"},{"indexed":false,"internalType":"address","name":"sequencerInbox","type":"address"},{"indexed":false,"internalType":"address","name":"bridge","type":"address"},{"indexed":false,"internalType":"address","name":"dabridge","type":"address"},{"indexed":false,"internalType":"address","name":"upgradeExecutor","type":"address"},{"indexed":false,"internalType":"address","name":"validatorUtils","type":"address"},{"indexed":false,"internalType":"address","name":"validatorWalletCreator","type":"address"}],"name":"RollupCreated","type":"event"},{"anonymous":false,"inputs":[],"name":"TemplatesUpdated","type":"event"},{"inputs":[],"name":"bridgeCreator","outputs":[{"internalType":"contract BridgeCreator","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"challengeManagerTemplate","outputs":[{"internalType":"contract IChallengeManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"uint64","name":"confirmPeriodBlocks","type":"uint64"},{"internalType":"uint64","name":"extraChallengeTimeBlocks","type":"uint64"},{"internalType":"address","name":"stakeToken","type":"address"},{"internalType":"uint256","name":"baseStake","type":"uint256"},{"internalType":"bytes32","name":"wasmModuleRoot","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"loserStakeEscrow","type":"address"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"string","name":"chainConfig","type":"string"},{"internalType":"uint64","name":"genesisBlockNum","type":"uint64"},{"components":[{"internalType":"uint256","name":"delayBlocks","type":"uint256"},{"internalType":"uint256","name":"futureBlocks","type":"uint256"},{"internalType":"uint256","name":"delaySeconds","type":"uint256"},{"internalType":"uint256","name":"futureSeconds","type":"uint256"}],"internalType":"struct ISequencerInbox.MaxTimeVariation","name":"sequencerInboxMaxTimeVariation","type":"tuple"}],"internalType":"struct Config","name":"config","type":"tuple"},{"internalType":"address[]","name":"validators","type":"address[]"},{"internalType":"uint256","name":"maxDataSize","type":"uint256"},{"internalType":"address","name":"nativeToken","type":"address"},{"internalType":"bool","name":"deployFactoriesToL2","type":"bool"},{"internalType":"uint256","name":"maxFeePerGasForRetryables","type":"uint256"},{"internalType":"address[]","name":"batchPosters","type":"address[]"},{"internalType":"address","name":"batchPosterManager","type":"address"}],"internalType":"struct RollupCreator.RollupDeploymentParams","name":"deployParams","type":"tuple"}],"name":"createRollup","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"l2FactoriesDeployer","outputs":[{"internalType":"contract DeployHelper","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"osp","outputs":[{"internalType":"contract IOneStepProofEntry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rollupAdminLogic","outputs":[{"internalType":"contract IRollupAdmin","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rollupUserLogic","outputs":[{"internalType":"contract IRollupUser","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract BridgeCreator","name":"_bridgeCreator","type":"address"},{"internalType":"contract IOneStepProofEntry","name":"_osp","type":"address"},{"internalType":"contract IChallengeManager","name":"_challengeManagerLogic","type":"address"},{"internalType":"contract IRollupAdmin","name":"_rollupAdminLogic","type":"address"},{"internalType":"contract IRollupUser","name":"_rollupUserLogic","type":"address"},{"internalType":"contract IUpgradeExecutor","name":"_upgradeExecutorLogic","type":"address"},{"internalType":"address","name":"_validatorUtils","type":"address"},{"internalType":"address","name":"_validatorWalletCreator","type":"address"},{"internalType":"contract DeployHelper","name":"_l2FactoriesDeployer","type":"address"}],"name":"setTemplates","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"upgradeExecutorLogic","outputs":[{"internalType":"contract IUpgradeExecutor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"validatorUtils","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"validatorWalletCreator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}] as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x90d68b056c411015eae3ec0b98ad94e2c91419f1)
 * -
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x06E341073b2749e0Bb9912461351f716DeCDa9b0)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfbd0b034e6305788007f6e0123cc5eae701a5751)
 */
export const rollupCreatorAddress = {
  1: '0x90D68B056c411015eaE3EC0b98AD94E2C91419F1',
  1337: '0x596eAbE0291D4cdAfAC7ef53D16C92Bf6922b5e0',
  17000: '0xB512078282F462Ba104231ad856464Ceb0a7747e',
  42161: '0x9CAd81628aB7D8e239F1A5B497313341578c5F71',
  42170: '0x9CAd81628aB7D8e239F1A5B497313341578c5F71',
  333333: '0x0000000000000000000000000000000000000000',
  412346: '0x3BaF9f08bAD68869eEdEa90F2Cc546Bd80F1A651',
  421614: '0x06E341073b2749e0Bb9912461351f716DeCDa9b0',
  11155111: '0xfBD0B034e6305788007f6e0123cc5EaE701a5751',
} as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x90d68b056c411015eae3ec0b98ad94e2c91419f1)
 * -
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x06E341073b2749e0Bb9912461351f716DeCDa9b0)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfbd0b034e6305788007f6e0123cc5eae701a5751)
 */
export const rollupCreatorConfig = {
  address: rollupCreatorAddress,
  abi: rollupCreatorABI,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenBridgeCreator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x60D9A46F24D5a35b95A78Dd3E793e55D94EE0660)
 * -
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x2f5624dc8800dfA0A82AC03509Ef8bb8E7Ac000e)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x8B9D9490a68B1F16ac8A21DdAE5Fd7aB9d708c14)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x56C486D3786fA26cc61473C499A36Eb9CC1FbD8E)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7edb2dfBeEf9417e0454A80c51EE0C034e45a570)
 */
export const tokenBridgeCreatorABI = [
  {
    stateMutability: 'payable',
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: 'admin_', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousAdmin', internalType: 'address', type: 'address', indexed: false },
      { name: 'newAdmin', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address', indexed: true }],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address', indexed: true }],
    name: 'Upgraded',
  },
  { stateMutability: 'payable', type: 'fallback' },
  { stateMutability: 'payable', type: 'receive' },
] as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x60D9A46F24D5a35b95A78Dd3E793e55D94EE0660)
 * -
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x2f5624dc8800dfA0A82AC03509Ef8bb8E7Ac000e)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x8B9D9490a68B1F16ac8A21DdAE5Fd7aB9d708c14)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x56C486D3786fA26cc61473C499A36Eb9CC1FbD8E)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7edb2dfBeEf9417e0454A80c51EE0C034e45a570)
 */
export const tokenBridgeCreatorAddress = {
  1: '0x60D9A46F24D5a35b95A78Dd3E793e55D94EE0660',
  1337: '0x54B4D4e578E10178a6cA602bdb6df0F213296Af4',
  17000: '0xac890ED9bC2494C053cE701F138958df95966d94',
  42161: '0x2f5624dc8800dfA0A82AC03509Ef8bb8E7Ac000e',
  42170: '0x8B9D9490a68B1F16ac8A21DdAE5Fd7aB9d708c14',
  333333: '0x0000000000000000000000000000000000000000',
  412346: '0x38F35Af53bF913c439eaB06A367e09D6eb253492',
  421614: '0x56C486D3786fA26cc61473C499A36Eb9CC1FbD8E',
  11155111: '0x7edb2dfBeEf9417e0454A80c51EE0C034e45a570',
} as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x60D9A46F24D5a35b95A78Dd3E793e55D94EE0660)
 * -
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x2f5624dc8800dfA0A82AC03509Ef8bb8E7Ac000e)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x8B9D9490a68B1F16ac8A21DdAE5Fd7aB9d708c14)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x56C486D3786fA26cc61473C499A36Eb9CC1FbD8E)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7edb2dfBeEf9417e0454A80c51EE0C034e45a570)
 */
export const tokenBridgeCreatorConfig = {
  address: tokenBridgeCreatorAddress,
  abi: tokenBridgeCreatorABI,
} as const;
