import Blockly from 'blockly';

export const blockType = 'import'

export const define = {
  "type": blockType,
  "message0": "Import宣言",
  "nextStatement": null,
  "colour": "#FF9900",
  "tooltip": "",
  "helpUrl": ""
}


export const javascriptCode = function (block: Blockly.Block) {

  const code = `import {
        ListObjectsV2Command,
        S3Client,
    } from '@aws-sdk/client-s3'
    `

  return code
}
