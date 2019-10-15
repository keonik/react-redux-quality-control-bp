// this is where you will put wrapper functions or modifications to your renders

//          https://github.com/testing-library/react-testing-library

import { Provider } from 'react-redux';
import React from 'react';
import store from './store/index';

// this is where you would add your test suite data to save time in tests
const storePlusTesting = { ...store };

// this is how your components have access to a redux store/provider
const storeWrapper = component => <Provider store={storePlusTesting}>{component}</Provider>;

// these make the global functions accessible in all test files
global.store = storePlusTesting;
global.storeWrapper = storeWrapper;
