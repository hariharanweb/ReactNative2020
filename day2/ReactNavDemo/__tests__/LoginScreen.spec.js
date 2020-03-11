import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';
describe('Login Screen', () => {
  it('should render username input', () => {
    const {getByPlaceholderText} = render(<LoginScreen />);
    expect(getByPlaceholderText('Username')).toBeDefined();
  });
  it('should render password input', () => {
    const {getByPlaceholderText} = render(<LoginScreen />);
    expect(getByPlaceholderText('Password')).toBeDefined();
  });
  it('should render login button', () => {
    const {getByText} = render(<LoginScreen />);
    expect(getByText('Login')).toBeDefined();
  });
  it('should navigate to Welcome Screen on clicking login', () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const {getByPlaceholderText, getByText} = render(
      <LoginScreen navigation={navigation} />,
    );
    fireEvent.changeText(getByPlaceholderText('Username'), 'India');
    fireEvent.changeText(getByPlaceholderText('Password'), 'Password');
    fireEvent.press(getByText('Login'));
    expect(navigation.navigate).toHaveBeenCalledWith('Welcome', {
      name: 'India',
    });
  });
});
