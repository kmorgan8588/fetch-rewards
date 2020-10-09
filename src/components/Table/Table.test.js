import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

test('renders initial text', () => {
    const { getByText } = render(<Table />);
    const placeholderElement = getByText(/Table goes here/i);
    expect(placeholderElement).toBeInTheDocument();
});

test('renders loading while data is being fetched', () => {
    const { getByText } = render(<Table />);
    const loadingElement = getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
})

test('renders list after loading', () => {
    const { getByText } = render(<Table />);
    const tableHeader = getByText(/Records/i);
    expect(tableHeader).toBeInTheDocument();
})