import { ChainId } from '@pancakeswap/chains'
import { ERC20Token, WCRO } from '@pancakeswap/sdk'
import { FRTN, USDC } from './common'

export const cronosZkEvmTestnetTokens = {
  wcro: WCRO[ChainId.CRONOS_ZKEVM_TESTNET],
  frtn: FRTN[ChainId.CRONOS_ZKEVM_TESTNET],
  vusd: new ERC20Token(
    ChainId.CRONOS_ZKEVM_TESTNET,
    '0x66c8221E5938A296D7542aB3D7cB856e789C06B2',
    18,
    'vUSD',
    'Veno USD',
  ),
  veth: new ERC20Token(
    ChainId.CRONOS_ZKEVM_TESTNET,
    '0x8eb8f79CaB3A1c02F9A0Fc33A8E792625D6a2405',
    18,
    'vETH',
    'Veno ETH',
    'https://ethereum.org',
  ),
  red: new ERC20Token(
    ChainId.CRONOS_ZKEVM_TESTNET,
    '0xFD74cAbD5B009d24Aaed6293De322a2f5eF7892d',
    18,
    'RED',
    'RED',
  ),
  blue: new ERC20Token(
    ChainId.CRONOS_ZKEVM_TESTNET,
    '0x7E338DB0e3F5eD9660eA92cdf79877f473094458',
    18,
    'BLUE',
    'BLUE',
  )
}
