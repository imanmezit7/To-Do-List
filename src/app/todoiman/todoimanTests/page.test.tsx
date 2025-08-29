import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ToDo from '../page';
import '@testing-library/jest-dom';


global.fetch = jest.fn();

beforeAll(() => 
{
    global.Audio = jest.fn().mockImplementation(() => 
    ({
        play: jest.fn(),
    }));
});

beforeEach(() => 
{
    jest.clearAllMocks(); 
});

describe('ToDo Component', () => 
{
    it('renders and adds a task', async () => 
      {
        (fetch as jest.Mock).mockResolvedValueOnce({
          json: async () => [],
        });

      render(<ToDo />);

      
      await waitFor(() => 
      {
          expect(fetch).toHaveBeenCalledWith('api/todos/get');
      });

      
      const input = screen.getByPlaceholderText('Add your task');
      fireEvent.change(input, { target: { value: 'Write tests' } });

      
      const mockNewTask = 
      {
        _id: 'abc123',
        text: 'Write tests',
        isDone: false,
        priority: 'low',
      };

      (fetch as jest.Mock).mockResolvedValueOnce({
        json: async () => mockNewTask,
      });

      
      const addButton = screen.getByRole('button', { name: /add/i });
      fireEvent.click(addButton);

      
      await waitFor(() => 
      {
          expect(screen.getByText('Write tests')).toBeInTheDocument();
      });
    });
});