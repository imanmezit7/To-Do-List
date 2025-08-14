import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ToDo from '../page';  
import '@testing-library/jest-dom';

global.fetch = jest.fn();
const mockedFetch = global.fetch as jest.Mock;  // <-- note the semicolon here

beforeEach(() => {
  jest.clearAllMocks();
});

const mockTasks = [
  { _id: '1', text: 'Task 1', isDone: false },
  { _id: '2', text: 'Task 2', isDone: true },
];

describe('ToDo component', () => {
  test('fetches and displays tasks on mount', async () => {
    mockedFetch.mockResolvedValueOnce({
      json: async () => mockTasks,
    });

    render(<ToDo />);

    expect(mockedFetch).toHaveBeenCalledWith('api/todos/get');

    await waitFor(() => {
      expect(screen.getByText('Task 1')).toBeInTheDocument();
      expect(screen.getByText('Task 2')).toBeInTheDocument();
    });
  });

  test('adds a new task', async () => {
    mockedFetch
      .mockResolvedValueOnce({ json: async () => [] }) 
      .mockResolvedValueOnce({
        json: async () => ({ _id: '3', text: 'New Task', isDone: false }),
      }); 

    render(<ToDo />);

    await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(1));

    const textarea = screen.getByPlaceholderText('Add your task');
    fireEvent.change(textarea, { target: { value: 'New Task' } });

    fireEvent.click(screen.getByText('ADD'));

    await waitFor(() => {
      expect(mockedFetch).toHaveBeenCalledWith('api/todos/post', expect.any(Object));
      expect(screen.getByText('New Task')).toBeInTheDocument();
    });
  });
});
