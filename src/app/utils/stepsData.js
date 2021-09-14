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
            image: './business.png',
            label: 'Business',
          },
          {
            id: 2,
            image: './personal.png',
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
    title: 'Great. What is the size of your company? This question is required. *',
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
  },
  {
    id: 4,
    question_id: 4,
    type: 'question',
    title: 'And which type of industry do you work in? This question is required. *',
    subtitle: '',
    content: [
      {
        type: 'select',
        values: [
          {
            id: 1,
            label: 'Accounting',
          },
          {
            id: 2,
            label: 'Animation',
          },
          {
            id: 3,
            label: 'Apparel & Fashion',
          },
          {
            id: 4,
            label: 'Arts and Crafts',
          },
        ],
      },
    ]
  },
  {
    id: 5,
    question_id: 5,
    type: 'question',
    title: "If you'd like us to follow up with you, please be sure to leave your email address below :)",
    subtitle: '',
    content: [
      {
        type: 'input',
        placeholder: 'name@example.com'
      },
    ]
  }
];

export default stepsData;