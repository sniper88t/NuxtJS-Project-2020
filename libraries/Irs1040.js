'use strict'

import { IRS1040 as irsSchema } from '../schemas/json/Irs1040.json'

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
      label: 'Married filing separately'
    },
    { key: 4, value: 'Head of household', label: 'Head of household' },
    { key: 5, value: 'Qualifying widow(er)', label: 'Qualifying widow(er)' }
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

export function getSchema() {
  const items = []
  const vfjsSchema = {
    type: 'object',
    properties: {}
  }

  const vfjsUiSchema = [
    {
      component: 'el-form',
      children: []
    }
  ]

  Object.keys(irsSchema).map((item) => {
    if (ignoredKeys.includes(item)) return
    if (optionalKeys.includes(item)) return

    // Temporarly ignore object keys
    if (typeof irsSchema[item] === 'object') return

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
        component: 'el-form-item',
        children: [
          {
            component: 'label',
            fieldOptions: {
              class: ['form-label', 'display-block'],
              domProps: {
                innerHTML: item
              }
            }
          },
          {
            component: 'el-checkbox-group',
            model: item,
            children: [],
            fieldOptions: {
              on: ['input']
            }
          }
        ]
      }
      enumData.map((data) => {
        const children = {
          component: 'el-checkbox',
          model: data.value,
          fieldOptions: {
            attrs: {
              label: data.label,
              value: data.value
            }
          }
        }
        vfjsField.children[1].children.push(children)
      })
    } else {
      vfjsSchema.properties[item] = {
        type
      }
      vfjsField = {
        component: 'el-form-item',
        children: [
          {
            component: 'label',
            fieldOptions: {
              class: ['form-label'],
              domProps: {
                innerHTML: item
              }
            }
          },
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
