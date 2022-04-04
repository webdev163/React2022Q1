import { render, screen } from '@testing-library/react';
import FormCardItem from './FormCardItem';
import { mockValidForm } from '../../tests/mockForm';

describe('Form card item', () => {
  let item: HTMLElement;
  const mockProps = mockValidForm();

  const setup = () => {
    render(<FormCardItem key={0} index={0} {...mockProps} />);
    item = screen.getByRole('listitem');
  };

  it('should render component', () => {
    setup();
    expect(item).toBeInTheDocument();
  });

  it('should render props correctly', () => {
    setup();
    expect(item).toContainHTML(mockProps.name);
    expect(item).toContainHTML(mockProps.date);
    expect(item).toContainHTML(mockProps.delivery);
    expect(item).toContainHTML(mockProps.time);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(item).toContainHTML(mockProps.image);
    expect(screen.getByText(/согласен на обработку персональных данных/i)).toBeInTheDocument();
  });
});
