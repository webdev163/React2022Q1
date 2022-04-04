export const mockValidForm = () => {
  return {
    name: 'Дмитрий',
    date: '2022-09-09',
    delivery: 'самовывоз',
    time: 'вечернее',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
    agree: true,
  };
};

export const mockInvalidForm = () => {
  return [
    {
      name: '11',
      date: '2021-01-01',
      delivery: 'default',
      time: 'вечернее',
      image: '',
      agree: false,
    },
    {
      name: 'ww',
      date: '',
      delivery: 'default',
      time: 'дневное',
      image: '',
      agree: true,
    },
    {
      name: '',
      date: '2022-05-05',
      delivery: 'default',
      time: 'вечернее',
      image: '',
      agree: false,
    },
  ];
};
