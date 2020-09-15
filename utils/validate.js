/**
 * Created by Dukens.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

// /**
//  * @param {string} str
//  * @returns {Boolean}
//  */
export function validUsername(str) {
  // eslint-disable-next-line camelcase
  const valid_map = ['admin', 'broker']
  return valid_map.includes(str.trim())
}
