import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import PomodoroTimer from '../PomodoroTimer';

// Mock timers
jest.useFakeTimers();

describe('PomodoroTimer', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  test('renders with default values', () => {
    render(<PomodoroTimer />);
    
    // Check that the timer displays the default session time (25:00)
    expect(screen.getByText(/25:00/)).toBeInTheDocument();
    
    // Check that session and break length settings are displayed
    expect(screen.getByText('Session Length')).toBeInTheDocument();
    expect(screen.getByText('Break Length')).toBeInTheDocument();
    
    // Verify default values in the status text
    expect(screen.getByText(/Session Length: 25 minutes/)).toBeInTheDocument();
    expect(screen.getByText(/Break Length: 5 minutes/)).toBeInTheDocument();
    expect(screen.getByText(/Timer is Stopped/)).toBeInTheDocument();
  });

  // test('can increase and decrease session length', () => {
  //   render(<PomodoroTimer />);
    
  //   // Get increment/decrement buttons for session length
  //   const sessionControls = screen.getAllByText(/Session Length/)[0].closest('div');
  //   const incrementButton = sessionControls?.querySelector('.increment');
  //   const decrementButton = sessionControls?.querySelector('.decrement');
    
  //   // Increase session length
  //   fireEvent.click(incrementButton!);
  //   expect(screen.getByText(/Session Length: 26 minutes/)).toBeInTheDocument();
    
  //   // Decrease session length
  //   fireEvent.click(decrementButton!);
  //   expect(screen.getByText(/Session Length: 25 minutes/)).toBeInTheDocument();
  // });

  // test('can increase and decrease break length', () => {
  //   render(<PomodoroTimer />);
    
  //   // Get increment/decrement buttons for break length
  //   const breakControls = screen.getAllByText(/Break Length/)[0].closest('div');
  //   const incrementButton = breakControls?.querySelector('.increment');
  //   const decrementButton = breakControls?.querySelector('.decrement');
    
  //   // Increase break length
  //   fireEvent.click(incrementButton!);
  //   expect(screen.getByText(/Break Length: 6 minutes/)).toBeInTheDocument();
    
  //   // Decrease break length
  //   fireEvent.click(decrementButton!);
  //   expect(screen.getByText(/Break Length: 5 minutes/)).toBeInTheDocument();
  // });

  // test('starts and stops the timer', () => {
  //   render(<PomodoroTimer />);
    
  //   // Get the start/stop button
  //   const startStopButton = screen.getByText('Start');
    
  //   // Start the timer
  //   fireEvent.click(startStopButton);
  //   expect(screen.getByText(/Timer is Running/)).toBeInTheDocument();
    
  //   // Timer should advance by 1 second
  //   act(() => {
  //     jest.advanceTimersByTime(1000);
  //   });
    
  //   // Timer should now show 24:59
  //   expect(screen.getByText(/Time Remaining: 24:59/)).toBeInTheDocument();
    
  //   // Stop the timer
  //   fireEvent.click(screen.getByText('Stop'));
  //   expect(screen.getByText(/Timer is Stopped/)).toBeInTheDocument();
    
  //   // Timer should not advance further
  //   act(() => {
  //     jest.advanceTimersByTime(1000);
  //   });
    
  //   // Timer should still show 24:59
  //   expect(screen.getByText(/Time Remaining: 24:59/)).toBeInTheDocument();
  // });

  // test('resets the timer', () => {
  //   render(<PomodoroTimer />);
    
  //   // Start the timer and let it run for a few seconds
  //   fireEvent.click(screen.getByText('Start'));
    
  //   act(() => {
  //     jest.advanceTimersByTime(3000);
  //   });
    
  //   // Timer should now show 24:57
  //   expect(screen.getByText(/Time Remaining: 24:57/)).toBeInTheDocument();
    
  //   // Reset the timer
  //   fireEvent.click(screen.getByText('Reset'));
    
  //   // Timer should reset to 25:00 and be stopped
  //   expect(screen.getByText(/Time Remaining: 25:00/)).toBeInTheDocument();
  //   expect(screen.getByText(/Timer is Stopped/)).toBeInTheDocument();
  // });

  // test('completes session and switches to break', async () => {
  //   render(<PomodoroTimer />);
    
  //   // For this test, set session length to 1 minute to make it faster
  //   const sessionControls = screen.getAllByText(/Session Length/)[0].closest('div');
    
  //   // Change session length to 1 minute by first decreasing to 1
  //   for (let i = 0; i < 24; i++) {
  //     fireEvent.click(sessionControls?.querySelector('.decrement')!);
  //   }
    
  //   // Start the timer
  //   fireEvent.click(screen.getByText('Start'));
    
  //   // Fast forward to end of session (60 seconds)
  //   act(() => {
  //     jest.advanceTimersByTime(60000);
  //   });
    
  //   // Should show alert and switch to break mode
  //   await waitFor(() => {
  //     expect(screen.getByText(/Time's up!/)).toBeInTheDocument();
  //     expect(screen.getByText(/Current Mode: Break/)).toBeInTheDocument();
  //   });
    
  //   // Close the alert
  //   fireEvent.click(screen.getByRole('button', { name: /close/i }));
    
  //   // Timer should now show break time (5:00)
  //   expect(screen.getByText(/Time Remaining: 5:00/)).toBeInTheDocument();
  // });
});