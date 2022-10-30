import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config();

const config: HardhatUserConfig = {
	solidity: '0.8.1',
	networks: {
		goerli: {
			url: process.env.QUICKNODE_API_KEY_URL,
			accounts: [process.env.GOERLI_PRIVATE_KEY],
		},
	},
};

export default config;
