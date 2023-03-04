import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderNav from './HeaderNav';




  test('renders header text', () => {
    render(<HeaderNav />);
    const headerText = screen.getByText('Cities Weather App');
    expect(headerText).toBeInTheDocument();
  });


// describe('HeaderNav', () => {
//   it('renders header text', () => {
//     render(<HeaderNav />);
//     const headerText = screen.getByText('Cities Weather App');
//     expect(headerText).toBeInTheDocument();
//   });

//   it('renders search link', () => {
//     render(<HeaderNav />);
//     const searchLink = screen.getByRole('link', { name: 'Search For Cities' });
//     expect(searchLink).toHaveAttribute('href', '#');
//   });
// });

//
// describe('HeaderNav', () => {
//   it('renders header text', () => {
//     render(<HeaderNav />);
//     const headerText = screen.getByText('Cities Weather App');
//     expect(headerText).toBeInTheDocument();
//   });

//   it('renders search link', () => {
//     render(<HeaderNav />);
//     const searchLink = screen.getByRole('link', { name: 'Search For Cities' });
//     expect(searchLink).toHaveAttribute('href', '/find-city');
//   });
// });
//

// test('renders Search For Cities link', () => {
//   // Arrange
//   render(<HeaderNav />);

//   // Act 
//   // Assert
//   const linkElement = screen.getByText(/Search For Cities/i, { exact: false });
//   expect(linkElement).toBeInTheDocument(); 
// });

// describe('HeaderNav component', () => {
// //   it('should render a component', () => {
// //     const { getByText } = render(<HeaderNav/>);
// //     expect(getByText('')).toBeInTheDocument();
// //   });
// test('renders Search For Cities link', () => {
//   // Arrange
//   render(<HeaderNav />);

//   // Act 
//   // Assert
//   const linkElement = screen.getByText(/Search For Cities/i, { exact: false });
//   expect(linkElement).toBeInTheDocument(); 
// });
// });