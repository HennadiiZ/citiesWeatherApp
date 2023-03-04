import { render, screen } from '@testing-library/react';
import HeaderNav from './HeaderNav';

// test('renders Search For Cities link', () => {
//   // Arrange
//   render(<HeaderNav />);

//   // Act 
//   // Assert
//   const linkElement = screen.getByText(/Search For Cities/i, { exact: false });
//   expect(linkElement).toBeInTheDocument(); 
// });

describe('HeaderNav component', () => {
//   it('should render a component', () => {
//     const { getByText } = render(<HeaderNav/>);
//     expect(getByText('')).toBeInTheDocument();
//   });
test('renders Search For Cities link', () => {
  // Arrange
  render(<HeaderNav />);

  // Act 
  // Assert
  const linkElement = screen.getByText(/Search For Cities/i, { exact: false });
  expect(linkElement).toBeInTheDocument(); 
});
});