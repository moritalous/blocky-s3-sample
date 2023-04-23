import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

export const blockType = 'list_objects'

export const define = {
  "type": blockType,
  "message0": "オブジェクト一覧取得: S3Client %1 バケット名 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "client"
    },
    {
      "type": "input_value",
      "name": "bucket",
      "check": "String"
    },
  ],
  "output": "Array",
  "colour": "#FF9900",
  "tooltip": "",
  "helpUrl": ""
}


export const javascriptCode = function (block: Blockly.Block) {

  const value_client = javascriptGenerator.valueToCode(block, 'client', javascriptGenerator.ORDER_ATOMIC);
  const value_bucket = javascriptGenerator.valueToCode(block, 'bucket', javascriptGenerator.ORDER_ATOMIC);

  const code = `await (async (client, bucket) => {

    const command = new ListObjectsV2Command({
      Bucket: bucket,
    });
  
    var keys = []
  
    try {
      let isTruncated = true;
  
      while (isTruncated) {
        const { Contents, IsTruncated, NextContinuationToken } = await client.send(command);
  
        Contents?.forEach((content) => {
          if (content.Key) keys.push(content.Key)
        })
  
        isTruncated = IsTruncated !== undefined ? IsTruncated : false;
  
        command.input.ContinuationToken = NextContinuationToken;
      }
  
    } catch (err) {
      console.error(err);
    }
  
    return keys
  })(${value_client}, ${value_bucket})
  `

  return [code, javascriptGenerator.ORDER_ATOMIC]
}


