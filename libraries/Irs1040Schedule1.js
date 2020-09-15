'use strict'

const schema = require('../schemas/IRS1040Schedule1.json').IRS1040Schedule1

const dateKeys = []
const numberKeys = []
const booleanKeys = []

const enumKeys = []
const enumValues = []

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

const optionalKeys = []

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

export function Form1040Schedule1SchemaFromJson() {
  const title = 'IRS 1040 Schedule 1'
  const description = 'IRS Form 1040 Schedule 1 for tax season 2019'

  const jsonSchema = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    type: 'object',
    title,
    description,
    properties: {},
    additionalProperties: false,
    required: []
  }

  Object.keys(schema).map((item) => {
    if (ignoredKeys.includes(item)) return
    if (optionalKeys.includes(item)) return

    // Temporarly ignore object keys
    if (typeof schema[item] === 'object') return

    setDateKeys(item)
    setNumberKeys(item)
    setBooleanKeys(item)

    const type = getFieldType(item)

    const jsonField = {
      type,
      title: item,
      attrs: {
        name: item,
        placeholder: item,
        title: item
      }
    }

    let enumDataIndex = null
    const enumData = enumKeys.filter((record, index) => {
      if (record === item) {
        enumDataIndex = index
        return record
      }
    })[0]

    if (enumData) {
      jsonField.enum = enumValues[enumDataIndex]
    }

    if (type === 'boolean') jsonField.default = false
    jsonSchema.properties[item] = jsonField
  })

  return jsonSchema
}
