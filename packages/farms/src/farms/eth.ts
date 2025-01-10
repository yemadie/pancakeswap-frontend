import { ChainId } from '@pancakeswap/chains'
import { ethereumTokens } from '@pancakeswap/tokens'
import { FeeAmount, Pool } from '@pancakeswap/v3-sdk'
import { Protocol, UniversalFarmConfig } from '../types'

const pinnedFarmConfig: UniversalFarmConfig[] = [
  {
    pid: 1,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.usdc,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
    lpAddress: Pool.getAddress(ethereumTokens.usdc, ethereumTokens.weth, FeeAmount.LOW),
  },
  {
    pid: 62,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.usdc,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOWEST,
    lpAddress: Pool.getAddress(ethereumTokens.usdc, ethereumTokens.weth, FeeAmount.LOWEST),
  },
  {
    pid: 63,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.weth,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.usdt, FeeAmount.LOWEST),
  },
  {
    pid: 2,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.weth,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.LOW,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.usdt, FeeAmount.LOW),
  },
  {
    pid: 3,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.usdc,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
    lpAddress: Pool.getAddress(ethereumTokens.usdc, ethereumTokens.usdt, FeeAmount.LOWEST),
  },
  {
    pid: 4,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.wbtc,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.wbtc, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 5,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.cake,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.cake, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 6,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.cake,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.cake, ethereumTokens.usdc, FeeAmount.MEDIUM),
  },
]

export const ethereumFarmConfig: UniversalFarmConfig[] = [
  ...pinnedFarmConfig,
  {
    pid: 78,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: '0xB2DC4d7627501338B578985c214208eb32283086',
    token0: ethereumTokens.order,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 77,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: '0x365EA9E5Cec960390f35b6509548e84073168A8B',
    token0: ethereumTokens.wbtc,
    token1: ethereumTokens.swBTC,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 76,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: '0xBfab494D6311432Ed86Ee88779aCD7B4838920B7',
    token0: ethereumTokens.usd0,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 75,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: '0x027039bd4eA6Ac7f80fEf4be2d0C6B74bfA932F9',
    token0: ethereumTokens.usde,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 74,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: '0x856B93E22127E6B76B79573bf95a93b4c88cb745',
    token0: ethereumTokens.deusd,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 73,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: '0x689D028f13033d2E2A7c87806bEe05F45d859B52',
    token0: ethereumTokens.deusd,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 72,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.zro,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.zro, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 71,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.taiko,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
    lpAddress: Pool.getAddress(ethereumTokens.taiko, ethereumTokens.weth, FeeAmount.HIGH),
  },
  {
    pid: 70,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.blb,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
    lpAddress: Pool.getAddress(ethereumTokens.blb, ethereumTokens.weth, FeeAmount.HIGH),
  },
  {
    pid: 69,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.weth,
    token1: ethereumTokens.mETH,
    feeAmount: FeeAmount.LOWEST,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.mETH, FeeAmount.LOWEST),
  },
  {
    pid: 68,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.weth,
    token1: ethereumTokens.mETH,
    feeAmount: FeeAmount.LOW,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.mETH, FeeAmount.LOW),
  },
  {
    pid: 67,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.mnt,
    token1: ethereumTokens.mETH,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.mnt, ethereumTokens.mETH, FeeAmount.MEDIUM),
  },
  {
    pid: 66,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.masa,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.masa, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 65,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.weth,
    token1: ethereumTokens.rswETH,
    feeAmount: FeeAmount.LOW,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.rswETH, FeeAmount.LOW),
  },
  {
    pid: 64,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.nmt,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.nmt, ethereumTokens.usdc, FeeAmount.MEDIUM),
  },
  {
    pid: 61,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.mstETH,
    token1: ethereumTokens.wstETH,
    feeAmount: FeeAmount.LOWEST,
    lpAddress: Pool.getAddress(ethereumTokens.mstETH, ethereumTokens.wstETH, FeeAmount.LOWEST),
  },
  {
    pid: 60,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.mswETH,
    token1: ethereumTokens.swETH,
    feeAmount: FeeAmount.LOWEST,
    lpAddress: Pool.getAddress(ethereumTokens.mswETH, ethereumTokens.swETH, FeeAmount.LOWEST),
  },
  {
    pid: 59,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.xrgb,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
    lpAddress: Pool.getAddress(ethereumTokens.xrgb, ethereumTokens.weth, FeeAmount.HIGH),
  },
  {
    pid: 58,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.pixel,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.pixel, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 57,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.pandora,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.pandora, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 56,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.weth,
    token1: ethereumTokens.weETH,
    feeAmount: FeeAmount.LOWEST,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.weETH, FeeAmount.LOWEST),
  },
  {
    pid: 55,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.pxETH,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOWEST,
    lpAddress: Pool.getAddress(ethereumTokens.pxETH, ethereumTokens.weth, FeeAmount.LOWEST),
  },
  {
    pid: 54,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.osak,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
    lpAddress: Pool.getAddress(ethereumTokens.osak, ethereumTokens.weth, FeeAmount.HIGH),
  },
  {
    pid: 53,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.ords,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.ords, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 52,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.weth,
    token1: ethereumTokens.swETH,
    feeAmount: FeeAmount.LOW,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.swETH, FeeAmount.LOW),
  },
  {
    pid: 51,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.eura,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.LOW,
    lpAddress: Pool.getAddress(ethereumTokens.eura, ethereumTokens.usdc, FeeAmount.LOW),
  },
  {
    pid: 50,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.sdt,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.sdt, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 49,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.weth,
    token1: ethereumTokens.btrfly,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.btrfly, FeeAmount.MEDIUM),
  },
  {
    pid: 48,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.insp,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
    lpAddress: Pool.getAddress(ethereumTokens.insp, ethereumTokens.weth, FeeAmount.HIGH),
  },
  {
    pid: 47,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.aioz,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.aioz, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 46,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.id,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.id, ethereumTokens.usdc, FeeAmount.MEDIUM),
  },
  {
    pid: 45,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.bonk,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.HIGH,
    lpAddress: Pool.getAddress(ethereumTokens.bonk, ethereumTokens.usdt, FeeAmount.HIGH),
  },
  {
    pid: 44,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.insp,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.HIGH,
    lpAddress: Pool.getAddress(ethereumTokens.insp, ethereumTokens.usdt, FeeAmount.HIGH),
  },
  {
    pid: 43,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.wstETH,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOWEST,
    lpAddress: Pool.getAddress(ethereumTokens.wstETH, ethereumTokens.weth, FeeAmount.LOWEST),
  },
  {
    pid: 42,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.meme,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
    lpAddress: Pool.getAddress(ethereumTokens.meme, ethereumTokens.weth, FeeAmount.HIGH),
  },
  {
    pid: 41,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.ethx,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
    lpAddress: Pool.getAddress(ethereumTokens.ethx, ethereumTokens.weth, FeeAmount.LOW),
  },
  {
    pid: 40,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.pyusd,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
    lpAddress: Pool.getAddress(ethereumTokens.pyusd, ethereumTokens.usdt, FeeAmount.LOWEST),
  },
  {
    pid: 39,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.pyusd,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.LOWEST,
    lpAddress: Pool.getAddress(ethereumTokens.pyusd, ethereumTokens.usdc, FeeAmount.LOWEST),
  },
  {
    pid: 38,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.woo,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.woo, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 12,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.wstETH,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
    lpAddress: Pool.getAddress(ethereumTokens.wstETH, ethereumTokens.weth, FeeAmount.LOW),
  },
  {
    pid: 37,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.cyber,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.cyber, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 36,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.wom, ethereumTokens.usdt, FeeAmount.HIGH),
    token0: ethereumTokens.wom,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.HIGH,
  },
  {
    pid: 35,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.wld, ethereumTokens.weth, FeeAmount.HIGH),
    token0: ethereumTokens.wld,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
  },
  {
    pid: 34,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.pendle, ethereumTokens.weth, FeeAmount.HIGH),
    token0: ethereumTokens.pendle,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
  },
  {
    pid: 33,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.canto, ethereumTokens.weth, FeeAmount.HIGH),
    token0: ethereumTokens.canto,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
  },
  {
    pid: 32,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.tusd, ethereumTokens.usdt, FeeAmount.LOWEST),
    token0: ethereumTokens.tusd,
    token1: ethereumTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 22,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.axl, ethereumTokens.usdc, FeeAmount.MEDIUM),
    token0: ethereumTokens.axl,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 19,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.rETH, ethereumTokens.weth, FeeAmount.LOW),
    token0: ethereumTokens.rETH,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 31,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.wbtc, ethereumTokens.rETH, FeeAmount.MEDIUM),
    token0: ethereumTokens.wbtc,
    token1: ethereumTokens.rETH,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 30,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.fuse, ethereumTokens.weth, FeeAmount.MEDIUM),
    token0: ethereumTokens.fuse,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 29,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.weth,
    token1: ethereumTokens.ens,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.ens, FeeAmount.MEDIUM),
  },
  {
    pid: 28,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.blur,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
    lpAddress: Pool.getAddress(ethereumTokens.blur, ethereumTokens.weth, FeeAmount.HIGH),
  },
  {
    pid: 27,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.pepe,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.HIGH,
    lpAddress: Pool.getAddress(ethereumTokens.pepe, ethereumTokens.weth, FeeAmount.HIGH),
  },
  {
    pid: 26,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.wbeth, ethereumTokens.weth, FeeAmount.LOW),
    token0: ethereumTokens.wbeth,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 25,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.unshETH, ethereumTokens.usdc, FeeAmount.MEDIUM),
    token0: ethereumTokens.unshETH,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 24,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.weth,
    token1: ethereumTokens.wncg,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.wncg, FeeAmount.MEDIUM),
  },
  {
    pid: 23,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.mask,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.mask, ethereumTokens.usdc, FeeAmount.MEDIUM),
  },
  {
    pid: 14,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.alETH, ethereumTokens.alcx, FeeAmount.MEDIUM),
    token0: ethereumTokens.alETH,
    token1: ethereumTokens.alcx,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 15,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.alETH, ethereumTokens.weth, FeeAmount.LOW),
    token0: ethereumTokens.alETH,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 16,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.fxs, ethereumTokens.weth, FeeAmount.MEDIUM),
    token0: ethereumTokens.fxs,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 17,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.frxETH, ethereumTokens.weth, FeeAmount.LOW),
    token0: ethereumTokens.frxETH,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 18,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.rpl, FeeAmount.MEDIUM),
    token0: ethereumTokens.weth,
    token1: ethereumTokens.rpl,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 20,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.weth, ethereumTokens.ankrETH, FeeAmount.LOW),
    token0: ethereumTokens.weth,
    token1: ethereumTokens.ankrETH,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 21,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    lpAddress: Pool.getAddress(ethereumTokens.cbEth, ethereumTokens.weth, FeeAmount.LOW),
    token0: ethereumTokens.cbEth,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 7,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.dai,
    token1: ethereumTokens.usdc,
    feeAmount: FeeAmount.LOWEST,
    lpAddress: Pool.getAddress(ethereumTokens.dai, ethereumTokens.usdc, FeeAmount.LOWEST),
  },
  {
    pid: 8,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.ldo,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.ldo, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 9,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.link,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.link, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 10,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.matic,
    token1: ethereumTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.matic, ethereumTokens.weth, FeeAmount.MEDIUM),
  },
  {
    pid: 13,
    chainId: ChainId.ETHEREUM,
    protocol: Protocol.V3,
    token0: ethereumTokens.usdc,
    token1: ethereumTokens.stg,
    feeAmount: FeeAmount.MEDIUM,
    lpAddress: Pool.getAddress(ethereumTokens.usdc, ethereumTokens.stg, FeeAmount.MEDIUM),
  },
]

export default ethereumFarmConfig
