export interface CardData {
  id: string;
  title: string;
  ingredients: string;
  price: string;
  weight: string;
  ccal: string;
}

export interface FormRef {
  common: React.RefObject<HTMLFormElement>;
  name: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  delivery: React.RefObject<HTMLSelectElement>;
  time: React.RefObject<HTMLInputElement>;
  image: React.RefObject<HTMLInputElement>;
  agree: React.RefObject<HTMLInputElement>;
}

export interface FormData {
  name: string;
  date: string;
  delivery: string;
  time: string;
  image: string | null;
  agree: boolean;
}

export enum FormFieldTypes {
  NAME = 'name',
  DATE = 'date',
  DELIVERY = 'delivery',
  TIME = 'time',
  IMAGE = 'image',
  AGREE = 'agree',
}

export enum ErrorTypes {
  NAME_REQUIRED = 'name',
  NAME_SHORT = 'name:short',
  NAME_INVALID = 'name:invalid',
  DATE_REQUIRED = 'date',
  DATE_INVALID = 'date:invalid',
  DELIVERY_REQUIRED = 'delivery',
  IMAGE_REQUIRED = 'image',
  AGREE_REQUIRED = 'agree',
}

export enum ErrorMessages {
  NAME_REQUIRED = 'Это поле не может быть пустым',
  NAME_SHORT = 'Это поле не может быть менее 3 символов',
  NAME_INVALID = 'Поле содержит недопустимые символы или цифры',
  DATE_REQUIRED = 'Это поле не может быть пустым',
  DATE_INVALID = 'Необходимо указать дату в будущем',
  DELIVERY_REQUIRED = 'Это поле не может быть пустым',
  IMAGE_REQUIRED = 'Это поле не может быть пустым',
  AGREE_REQUIRED = 'Необходимо согласиться с обработкой персональных данных',
}
