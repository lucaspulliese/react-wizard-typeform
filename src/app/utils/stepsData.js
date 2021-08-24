const stepsData = [
  {
    id: 1,
    type: 'section',
    content: [
      {
        type: 'text',
        value: 'Hey there. We"d love to learn more about you and how our product is helping you.',
      },
      {
        type: 'text',
        value: 'Can you spare 5 minutes?',
      }
    ]
  },
  {
    id: 2,
    question_id: 1,
    type: 'question',
    title: 'First off, are you using the product for business or personal use? *',
    subtitle: '',
    content: [
      {
        type: 'checkbox-image',
        values: [
          {
            id: 1,
            image: '/business.png',
            label: 'Business',
          },
          {
            id: 2,
            image: '/personal.png',
            label: 'Personal',
          },
        ],
      },
    ]
  }
];

export default stepsData;