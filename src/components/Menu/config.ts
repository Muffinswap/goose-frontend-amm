import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://muffinance.org/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://muffinance.org/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://muffinance.org/pools'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Muffinswap',
        href: 'https://pancakeswap.info/token/0xebc46c9898f675eefef43ec410dd91edbf0006c1',
      },
      {
        label: 'CoinGecko',
        href: '',
      },
      {
        label: 'CoinMarketCap',
        href: '',
      },
      {
        label: 'Coming Soon',
        href: '',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/muffinswap/",
      },
      {
        label: "Telegram",
        href: "",
      },
      {
        label: "Blog",
        href: "https://medium.com/muffinfi",
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '',
  },
//  {
//    label: 'Audit by Hacken',
//    icon: 'AuditIcon',
//   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
//  },
  {
    label: 'Claim 20 BNB',
    icon: 'AuditIcon',
    href: 'https://surveyheart.com/form/604c366d536a73312359d895',
  },
]

export default config
