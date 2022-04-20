export interface CardData {
  id: string;
  title: string;
  ingredients: string;
  price: string;
  weight: string;
  ccal: string;
}

export interface FormData {
  name: string;
  date: string;
  delivery: string;
  time: string;
  image: string | null;
  agree: boolean;
}

export interface FormDataValues {
  name: string;
  date: string;
  delivery: string;
  time: string;
  image: string | null;
  agree: string;
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

export interface GuardianResponseItem {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields: {
    headline: string;
    standfirst: string;
    trailText: string;
    byline: string;
    main: string;
    body: string;
    wordcount: string;
    firstPublicationDate: string;
    isInappropriateForSponsorship: string;
    isPremoderated: string;
    lastModified: string;
    productionOffice: string;
    publication: string;
    shortUrl: string;
    shouldHideAdverts: string;
    showInRelatedContent: string;
    thumbnail: string;
    legallySensitive: string;
    lang: string;
    isLive: string;
    bodyText: string;
    charCount: string;
    shouldHideReaderRevenue: string;
    showAffiliateLinks: string;
    bylineHtml: string;
  };
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

export interface GuardianResponse {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: GuardianResponseItem[];
  };
}

export interface ModalData {
  body: string;
  thumbnail: string;
  standfirst: string;
  webPublicationDate: string;
  shortUrl: string;
}

export interface InitialState {
  search: {
    testCounter: number;
  };
  form: {
    testCounter: number;
  };
}
