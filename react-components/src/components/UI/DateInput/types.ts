export interface DateInputProps {
  forwardRef: React.RefObject<HTMLInputElement>;
  errorsArr: string[];
  hideValidationErr: (e: React.ChangeEvent) => void;
}
