import React from 'react'
import { render } from '@testing-library/react'

import Button, { ButtonVariant } from './Button'

describe('<Button />', () => {
    it('Renders Default Buttons', () => {
        const { container } = render(<Button label="Basic Button" />)
        expect(container.querySelector('.Button')).not.toBe(null)
    })

    it('Renders Primary Buttons', () => {
        const { container } = render(<Button variant={ButtonVariant.primary} />)
        expect(container.querySelector('.Button-primary')).not.toBe(null)
    })

    it('Renders Secondary Buttons', () => {
        const { container } = render(<Button variant={ButtonVariant.secondary} />)
        expect(container.querySelector('.Button-secondary')).not.toBe(null)
    })

    it('Renders Disabled Buttons', () => {
        const { container } = render(<Button variant={ButtonVariant.primary} disabled />)
        expect(container.querySelector('.Button-primary-disabled')).not.toBe(null)
    })
    it('Renders with a passed in className', () => {
        const { container } = render(<Button className="Foo" variant={ButtonVariant.primary} />)
        expect(container.querySelector('.Foo')).not.toBe(null)
    })
})
