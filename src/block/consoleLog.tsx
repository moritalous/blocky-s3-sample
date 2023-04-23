import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

export const blockType = 'log'

export const define = {
  "type": blockType,
  "message0": "ログ出力 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "String",
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#888888",
  "tooltip": "",
  "helpUrl": ""
}

export const javascriptCode = function (block: Blockly.Block) {

  const value_message = javascriptGenerator.valueToCode(block, 'message', javascriptGenerator.ORDER_ATOMIC);

  const code = `console.log(${value_message})
  `

  return code
}
