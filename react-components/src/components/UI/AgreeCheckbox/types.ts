export interface AgreeCheckboxProps {
  forwardRef: React.RefObject<HTMLInputElement>;
  errorsArr: string[];
  hideValidationErr: (e: React.ChangeEvent) => void;
}
