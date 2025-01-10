import { ChainId } from '@pancakeswap/chains'
import { ERC20Token, WCRO } from '@pancakeswap/sdk'
import { FRTN_TESTNET, USDC_TESTNET } from './common'

export const cronosTestnetTokens = {
  wcro: WCRO[ChainId.CRONOS_TESTNET],
  usdc: USDC_TESTNET,
  frtn: FRTN_TESTNET,
  red: new ERC20Token(
    ChainId.CRONOS_TESTNET,
    '0xC2f0D98026c1E3fd85c4F50820B1867C4462d0e3',
    18,
    'RED',
    'RED',
    'https://ebisusbay.com/',
  ),
  blue: new ERC20Token(
    ChainId.CRONOS_TESTNET,
    '0x6a32FDb959e7811F872E336A66C7cDBecFC3e3b1',
    18,
    'BLUE',
    'BLUE',
    'https://ebisusbay.com/',
  )
}
