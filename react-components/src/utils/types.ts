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
