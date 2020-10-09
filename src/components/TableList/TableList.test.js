import React from 'react';
import { render, screen } from '@testing-library/react';
import TableList from './TableList';
import TESTDATA from '../../TestData';

test('renders column names with data text', () => {
    render(<TableList contents={TESTDATA} />);
    const columnNameElement = screen.getByText("id");
    expect(columnNameElement).toBeInTheDocument();
});

test('renders column data', () => {
    render(<TableList contents={TESTDATA} />);
    const columnElement = screen.getByText("Item 684");
    expect(columnElement).toBeInTheDocument();
});