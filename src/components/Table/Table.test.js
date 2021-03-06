import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';
import filterFunc from '../../util/filter'

test('renders loading while data is being fetched', () => {
    const { getByText } = render(<Table filterFunc={filterFunc} />);
    const loadingElement = getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
})

test('renders list after loading', () => {
    const { getByText } = render(<Table filterFunc={filterFunc} />);
    const tableHeader = getByText(/Records/i);
    expect(tableHeader).toBeInTheDocument();
})