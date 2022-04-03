export interface DeliverySelectProps {
  forwardRef: React.RefObject<HTMLSelectElement>;
  errorsArr: string[];
  hideValidationErr: (e: React.ChangeEvent) => void;
}
