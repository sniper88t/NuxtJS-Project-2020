'use strict'

import numberFormatter from 'number-formatter'

export function lastXChars(str, lastX) {
  if (!lastX || isNaN(lastX) || lastX < 0) return ''
  return str.substr(str.length - lastX, str.length)
}

export function isIndicatorKey(key) {
  if (lastXChars(key, 3) === 'Ind') {
    return true
  } else {
    return false
  }
}

export function isAmountKey(key) {
  if (lastXChars(key, 3) === 'Amt') {
    return true
  } else {
    return false
  }
}

export function isNumeric(key) {
  const lastX = lastXChars(key, 3)
  if (lastX === 'Amt' || lastX === 'Cnt') {
    return true
  } else {
    return false
  }
}

export function isCodeKey(key) {
  if (lastXChars(key, 2) === 'Cd') {
    return true
  } else {
    return false
  }
}

export function formatNumber(number) {
  return numberFormatter('$ #,###.00', number)
}

export function parseNumber(input) {
  let result
  if (!input || input.length <= 0) return null
  input = formatNumber(input)
  if (input.length > 0)
    result = parseInt(
      input
        .split(' ')[1]
        .split('.')[0]
        .split(',')
        .join('')
    )
  if (isNaN(result)) result = 0
  return result
}

export function formatNumberInputs(obj) {
  Object.keys(obj).map((key) => {
    if (isAmountKey(key)) {
      obj[key] = formatNumber(obj[key])
    }
  })
}
