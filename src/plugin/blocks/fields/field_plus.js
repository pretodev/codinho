import * as Blockly from 'blockly/core';

/**
 * Creates a plus image field used for mutation.
 * @param {Object=} args Untyped args passed to block.minus when the field
 *     is clicked.
 * @returns {Blockly.FieldImage} The Plus field.
 */
export function createPlusField(args = undefined) {
    const plus = new Blockly.FieldImage(plusImage, 15, 15, 'Adicionar', onclick_)
    /**
     * Untyped args passed to block.plus when the field is clicked.
     * @type {?(Object|undefined)}
     * @private
     */
    plus.args_ = args
    return plus
}

/**
 * Calls block.plus(args) when the plus field is clicked.
 * @param {!Blockly.FieldImage} plusField The field being clicked.
 * @private
 */
function onclick_(plusField) {
    const block = plusField.getSourceBlock()

    if (block.isInFlyout) {
        return;
    }

    Blockly.Events.setGroup(true)
    const oldExtraState = getExtraBlockState_(block)
    block.plus()
    const newExtraState = getExtraBlockState_(block)

    if (oldExtraState !== newExtraState) {
        const event = new Blockly.Events.BlockChange(block, 'mutation', null, oldExtraState, newExtraState)
        Blockly.Events.fire(event)
    }

    Blockly.Events.setGroup(false)

}

/**
 * Get the extra state for a block.
 * @param {!Blockly.Block} block
 * @private
 */
function getExtraBlockState_(block) {
    const state = block.saveExtraState()
    return state ? JSON.stringify(state) : ''
}

const plusImage =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC' +
    '9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT' +
    'ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz' +
    'FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW' +
    'MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS' +
    '44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==';