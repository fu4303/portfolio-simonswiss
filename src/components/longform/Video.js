/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'

export default ({ children }) => <div css={[tw`my-8`, styles]}>{children}</div>

const styles = {
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
  maxWidth: '100%',
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}
