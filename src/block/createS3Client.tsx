import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

export const blockType = 'create_s3_client'

export const define = {
  "type": blockType,
  "message0": "S3Client生成: アクセスキー %1 シークレットアクセス %2 リージョン %3",
  "args0": [
    {
      "type": "input_value",
      "name": "accessKeyId",
      "check": "String",
    },
    {
      "type": "input_value",
      "name": "secretAccessKey",
      "check": "String",
    },
    {
      "type": "field_dropdown",
      "name": "region",
      "options": [
        ["アジアパシフィック (東京)", "ap-northeast-1"],
        ["米国東部 (バージニア北部)", "us-east-1"]
      ],
      "check": "String",
    }
  ],
  "output": null,
  "inputsInline": false,
  "colour": "#FF9900",
  "tooltip": "",
  "helpUrl": ""
}


export const javascriptCode = function (block: Blockly.Block) {

  const value_accesskeyid = javascriptGenerator.valueToCode(block, 'accessKeyId', javascriptGenerator.ORDER_ATOMIC);
  const value_secretaccesskey = javascriptGenerator.valueToCode(block, 'secretAccessKey', javascriptGenerator.ORDER_ATOMIC);
  const value_region = block.getFieldValue('region');

  const code = `new S3Client({
    credentials: {
      accessKeyId: ${value_accesskeyid},
      secretAccessKey: ${value_secretaccesskey},
    },
    region: '${value_region}',
  })
  `

  return [code, javascriptGenerator.ORDER_ATOMIC]

}
