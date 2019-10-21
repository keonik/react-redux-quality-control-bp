import React from 'react';
// testing libraries for testing-library/react
import { render, fireEvent } from '@testing-library/react';
//component
import App from './App';

test('<App/>', () => {
    const testMessage = 'Get to coding';
    const { queryByText, getByLabelText, getByText } = render(global.storeWrapper(<App />));

    // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found
    expect(queryByText('Long string that shouldnt be in doc')).toBeNull();

    // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
    // fireEvent.click(getByLabelText(/show/i))

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(getByText(testMessage)).toBeDefined();
});
