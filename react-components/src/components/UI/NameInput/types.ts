export interface NameInputProps {
  forwardRef: React.RefObject<HTMLInputElement>;
  errorsArr: string[];
  hideValidationErr: (e: React.ChangeEvent) => void;
}
