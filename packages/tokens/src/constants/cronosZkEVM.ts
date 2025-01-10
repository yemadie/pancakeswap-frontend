import { ChainId } from '@pancakeswap/chains'
import { ERC20Token, WCRO, WETH9 } from '@pancakeswap/sdk'
import { FRTN, USDC } from './common'

export const cronosZkEvmTokens = {
  wcro: WCRO[ChainId.CRONOS_ZKEVM],
  frtn: FRTN[ChainId.CRONOS_ZKEVM],
  vusd: new ERC20Token(
    ChainId.CRONOS_ZKEVM,
    '0x5b91e29Ae5A71d9052620Acb813d5aC25eC7a4A2',
    18,
    'vUSD',
    'Veno USD',
  ),
  veth: new ERC20Token(
    ChainId.CRONOS_ZKEVM,
    '0x271602A97027ee1dd03b1E6e5dB153eB659A80b1',
    18,
    'vETH',
    'Veno ETH',
    'https://ethereum.org',
  ),
  cro: new ERC20Token(
    ChainId.CRONOS_ZKEVM,
    '0xBCaA34FF9D5BFD0d948b18Cf6Bf39a882F4a1cBD',
    8,
    'CRO',
    'Cronos',
    'https://www.crypto.org',
  )
}
