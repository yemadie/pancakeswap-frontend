import { WCRO } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import { FRTN_MAINNET, USDC, WBTC_CRONOS } from './common'

export const cronosTokens = {
  wcro: WCRO[ChainId.CRONOS],
  usdc: USDC[ChainId.CRONOS],
  wbtc: WBTC_CRONOS,
  frtn: FRTN_MAINNET,
}
