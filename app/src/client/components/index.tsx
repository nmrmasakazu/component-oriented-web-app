import React from 'react'
import Next from 'next'
import styled from 'styled-components'

type Props = {
    className?: string
}

const Component: Next.NextFC<Props> = props => (
    <div>Welcome</div>
)

const StyledComponent = styled(Component)`
    color: #f00;
`

export default StyledComponent
