import { ReactElement } from 'react'
import Faucet from '../components/Faucet'
import content from '../../content/pages/faucet.json'
import Page from '@components/@shared/Page'
import { useMarketMetadata } from '../@context/MarketMetadata'
import { useRouter } from 'next/router'

export default function PageFaucet(): ReactElement {
  const {
    appConfig: { faucet }
  } = useMarketMetadata()

  const router = useRouter()

  if (faucet.enabled === 'true') {
    return (
      <Page title={content.title} description={content.description} uri="">
        <Faucet />
      </Page>
    )
  } else {
    router.push('/404')
  }
}
