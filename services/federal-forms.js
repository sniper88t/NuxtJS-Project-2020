// List of all Federal forms
const federalForms = [
  {
    text: 'Federal Forms',
    opened: true,
    children: [
      {
        text: 'Individuals',
        opened: true,
        children: [
          {
            text: 'Form 1040',
            icon: 'el-icon-document-copy',
            link: '/1040'
          },
          {
            text: 'Form 1040-NR',
            icon: 'el-icon-document-copy',
            link: ''
          },
          {
            text: 'Form 1040-SS',
            icon: 'el-icon-document-copy',
            link: ''
          },
          {
            text: 'Form 10-SR',
            icon: 'el-icon-document-copy'
          }
        ]
      },
      {
        text: 'Corporations',
        opened: true,
        children: [
          {
            text: 'Form 1120',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 1120-F',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 1120-S',
            icon: 'el-icon-document',
            link: ''
          }
        ]
      },
      {
        text: 'Employments',
        opened: true,
        children: [
          {
            text: 'Form 940',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 940-PR',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 941',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 941-PR',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 941-SS',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 943',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 943-PR',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 944',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 945',
            icon: 'el-icon-document',
            link: ''
          }
        ]
      },
      {
        text: 'Organizations',
        opened: false,
        children: [
          {
            text: 'Form 990',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 990-EZ',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 990-N',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 990-PF',
            icon: 'el-icon-document',
            link: ''
          },
          {
            text: 'Form 1120-POL',
            icon: 'el-icon-document',
            link: ''
          }
        ]
      }
    ]
  }
]
export { federalForms }
