'use strict'

import PDFSchema from './pdf-ui-schema.json'

const dateKeys = []
const numberKeys = []
const booleanKeys = []

const enumKeys = ['IndividualReturnFilingStatusCd']

const enumValues = [
  [
    { key: 1, value: 'Single', label: 'Single' },
    {
      key: 2,
      value: 'Married filing jointly',
      label: 'Married filing jointly'
    },
    {
      key: 3,
      value: 'Married filing separately',
      label: 'Married filing separately (MFS)'
    },
    { key: 4, value: 'Head of household', label: 'Head of household (HOH)' },
    {
      key: 5,
      value: 'Qualifying widow(er)',
      label: 'Qualifying widow(er) (QW)'
    }
  ]
]

const ignoredKeys = [
  'xmlns',
  'xmlns:xsi',
  'documentId',
  'softwareId',
  'softwareVersionNum',
  'documentName',
  'referenceDocumentId',
  'referenceDocumentName'
]

const optionalKeys = ['Form1040SRInd', 'NRALiteralCd']

const readOnlyKeys = ['TotalDeductionsAmt']

function lastXChars(str, lastX) {
  if (!lastX || isNaN(lastX) || lastX < 0) return ''
  return str.substr(str.length - lastX, str.length)
}

function setBooleanKeys(key) {
  if (lastXChars(key, 3) === 'Ind') {
    booleanKeys.push(key)
  }
}

function setDateKeys(key) {
  if (lastXChars(key, 2) === 'Dt') {
    dateKeys.push(key)
  }
}

function setNumberKeys(key) {
  if (lastXChars(key, 3) === 'Amt') {
    numberKeys.push(key)
  }
}

function getFieldType(key) {
  let type = 'string'
  if (dateKeys.includes(key)) type = 'date'
  if (numberKeys.includes(key)) type = 'number'
  if (booleanKeys.includes(key)) type = 'boolean'
  return type
}

function componentType(type) {
  if (type === 'string') return 'el-input'
  if (type === 'date') return 'el-date-picker'
  if (type === 'number') return 'el-slider'
}

function isReadOnly(key) {
  let readOnly = false
  if (readOnlyKeys.includes(key)) readOnly = true
  return readOnly
}

export function getBaseSchema() {
  const vfjsUiSchema = []

  const vfjsSchema = {
    type: 'object',
    properties: {}
  }

  return {
    schema: vfjsSchema,
    uiSchema: vfjsUiSchema
  }
}

export function getFilingStatusSchema() {
  const enumIndex = enumValues.indexOf('IndividualReturnFilingStatusCd')
  const schema = {
    component: 'div',
    fieldOptions: {
      class: ['mt-8']
    },
    children: []
  }
  enumValues[enumIndex].map((data) => {
    const children = {
      component: 'label',
      fieldOptions: {
        attrs: {
          for: data.label,
          class: ['checkbox-item']
        },
        domProps: {
          innerHTML: `<input type="checkbox" id="${data.label}" /> ${data.label}`
        }
      }
    }
    schema.children.push(children)
  })
  return schema
}

export function filingStatusSchema() {
  const items = []
  const vfjsSchema = {
    type: 'object',
    properties: {}
  }

  const vfjsUiSchema = [
    {
      component: 'el-form',
      fieldOptions: {
        attrs: {
          inline: true
        }
      },
      children: []
    }
  ]

  Object.keys(PDFSchema.ReturnData.IRS1040).map((item) => {
    if (ignoredKeys.includes(item)) return
    if (optionalKeys.includes(item)) return
    if (!enumKeys.includes(item)) return

    // Temporarly ignore object keys
    if (typeof PDFSchema.ReturnData.IRS1040[item] === 'object') return

    setDateKeys(item)
    setNumberKeys(item)
    setBooleanKeys(item)

    const type = getFieldType(item)

    // Temporarly ignore date inputs
    if (type !== 'string' && type !== 'number') return

    let vfjsField = {}

    if (enumKeys.includes(item)) {
      const enumDataIndex = enumKeys.indexOf(item)
      const enumData = enumValues[enumDataIndex]
      vfjsSchema.properties[item] = {
        type: 'string'
      }
      vfjsField = {
        component: 'div',
        fieldOptions: {
          class: ['mt-8']
        },
        children: []
      }
      enumData.map((data) => {
        const children = {
          component: 'label',
          fieldOptions: {
            attrs: {
              for: data.label,
              class: ['checkbox-item']
            },
            domProps: {
              innerHTML: `<input type="checkbox" id="${data.label}" /> ${data.label}`
            }
          }
        }
        vfjsField.children.push(children)
      })
    } else {
      vfjsSchema.properties[item] = {
        type
      }
      vfjsField = {
        component: 'el-form-item',
        children: [
          {
            component: componentType(type),
            model: item,
            fieldOptions: {
              class: [],
              on: ['input'],
              attrs: {}
            }
          }
        ]
      }
    }

    if (type === 'number') {
      vfjsField.children[1].fieldOptions.attrs.max = 100000
      vfjsField.children[1].fieldOptions.class.push('display-block')
      vfjsField.children.push({
        component: 'el-input-number',
        model: item,
        fieldOptions: {
          on: ['input'],
          attrs: {
            size: 'medium'
          }
        }
      })
    }

    if (isReadOnly(item)) {
      vfjsField.children[1].fieldOptions.attrs.disabled = true
      if (vfjsField.children[2]) {
        vfjsField.children[2].fieldOptions.attrs.disabled = true
      }
    }

    items.push({ item, type })
    vfjsUiSchema[0].children.push(vfjsField)
  })

  return {
    items,
    schema: vfjsSchema,
    uiSchema: vfjsUiSchema
  }
}
