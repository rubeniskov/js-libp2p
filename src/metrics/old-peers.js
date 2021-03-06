'use strict'

const LRU = require('hashlru')

/**
 * Creates and returns a Least Recently Used Cache
 *
 * @param {number} maxSize
 * @returns {LRUCache}
 */
module.exports = (maxSize) => {
  const patched = LRU(maxSize)
  patched.delete = patched.remove
  return patched
}
