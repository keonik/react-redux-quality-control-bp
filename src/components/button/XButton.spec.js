import React from 'react';
import { render } from '@testing-library/react';

import XButton from './XButton';

describe('<XButton />', () => {
    it('renders without crashing', () => {
        const { container } = render(<XButton />);
        expect(container.querySelector('.XButton')).not.toBeNull();
    });
});
