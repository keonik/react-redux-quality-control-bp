import React from 'react'
import { render } from '@testing-library/react'

import ButtonBar, { ButtonBarAlign } from './ButtonBar'

describe('<ButtonBar />', () => {
    it('defaults right', () => {
        const { container } = render(<ButtonBar />)
        expect(container.querySelector('.ButtonBar-right')).not.toBe(null)
    })

    it('centers', () => {
        const { container } = render(<ButtonBar align={ButtonBarAlign.center} />)
        expect(container.querySelector('.ButtonBar-center')).not.toBe(null)
    })

    it('left aligns', () => {
        const { container } = render(<ButtonBar align={ButtonBarAlign.left} />)
        expect(container.querySelector('.ButtonBar-left')).not.toBe(null)
    })
    it('takes custom styles', () => {
        const { container } = render(<ButtonBar className="Foo" />)
        expect(container.querySelector('.Foo')).not.toBe(null)
    })
})
