// __tests__/ToDo.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ToDo from '../page'; // ⬅️ Replace with actual path
import '@testing-library/jest-dom';

// Mock fetch globally
global.fetch = jest.fn();

beforeAll(() => {
  // Optional: Mock Audio to prevent errors from `new Audio().play()`
  global.Audio = jest.fn().mockImplementation(() => ({
    play: jest.fn(),
  }));
});

beforeEach(() => {
  jest.clearAllMocks(); // Reset fetch mock between tests
});

describe('ToDo Component', () => {
  it('renders and adds a task', async () => {
    // Step 1: Mock initial fetchTasks call (empty list)
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [],
    });

    render(<ToDo />);

    // Wait for useEffect (fetchTasks) to be called
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('api/todos/get');
    });

    // Step 2: Simulate typing in the textarea
    const input = screen.getByPlaceholderText('Add your task');
    fireEvent.change(input, { target: { value: 'Write tests' } });

    // Step 3: Mock the POST fetch call for adding the task
    const mockNewTask = {
      _id: 'abc123',
      text: 'Write tests',
      isDone: false,
      priority: 'low',
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockNewTask,
    });

    // Step 4: Click the "ADD" button
    const addButton = screen.getByRole('button', { name: /add/i });
    fireEvent.click(addButton);

    // Step 5: Expect the task to show up in the DOM
    await waitFor(() => {
      expect(screen.getByText('Write tests')).toBeInTheDocument();
    });
  });
});
