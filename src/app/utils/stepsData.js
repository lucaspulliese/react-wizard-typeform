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
        type: 'radio-image',
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
  },
  {
    id: 3,
    question_id: 3,
    type: 'question',
    title: 'Great. What is the size of your company?This question is required. *',
    subtitle: '',
    content: [
      {
        type: 'checkbox',
        values: [
          {
            id: 1,
            label: 'Self-Employed/Freelancer',
          },
          {
            id: 2,
            label: '1-10 employees',
          },
          {
            id: 3,
            label: '11-50 employees',
          },
          {
            id: 4,
            label: '51-200 employees',
          },
        ],
      },
    ]
  }
];

export default stepsData;