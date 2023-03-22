/*! KataCode Encoder | DSRKafuU (https://dsrkafuu.net) | Copyright (c) AGPL-3.0 License */

// 片假名 char code 字典 (36 个)
/* prettier-ignore */
const CHAR_CODE_ARR = [
  12449, 12451, 12453, 12455, 12457, // ァィゥェォ
  12459, 12461, 12463, 12465, 12467, // カキクケコ
  12469, 12471, 12473, 12475, 12477, // サシスセソ
  12479, 12481, 12483, 12486, 12488, // タチツテト
  12490, 12491, 12492, 12493, 12494, // ナニヌネノ
  12495, 12498, 12501, 12504, 12507, // ハヒフヘホ
  12510, 12511, 12512, 12513, 12514, // マミムメモ
];
// 片假名 char code 分隔符 ヤ~ン (11 个)
/* prettier-ignore */
const SPLIT_CODE_ARR = [
  12515, 12516, // ャヤ
  12517, 12518, // ュユ
  12519, 12520, // ョヨ
  12521, 12522, 12523, 12524, 12525, // ラリルレロ
  12526, 12527, // ヮワ
  12530, 12531, // ヲン
];

// 35 进制数值位 (0~Y) 查找片假名表
interface IdxCharDict {
  [key: string]: string | string[];
}
const DICT_IDX_CHAR: IdxCharDict = Object.create(null);
// 以下标作为 0~Y 生成查找表
CHAR_CODE_ARR.forEach((codePoint, idx) => {
  DICT_IDX_CHAR[idx.toString(35)] = String.fromCodePoint(codePoint);
});
// 分隔符对应的片假名字符数组
DICT_IDX_CHAR['|'] = [];
SPLIT_CODE_ARR.forEach((codePoint) => {
  (DICT_IDX_CHAR['|'] as string[]).push(String.fromCodePoint(codePoint));
});

// 片假名查找35 进制数值位 (0~Y) 表
interface CharIdxDict {
  [key: string]: string;
}
const DICT_CHAR_IDX: CharIdxDict = Object.create(null);
for (const key of Object.keys(DICT_IDX_CHAR)) {
  const val = DICT_IDX_CHAR[key];
  if (Array.isArray(val)) {
    val.forEach((char) => (DICT_CHAR_IDX[char] = key));
  } else {
    DICT_CHAR_IDX[val] = key;
  }
}

/**
 * 通过数组长度生成随机下标
 */
function rand(length: number) {
  return Math.floor(Math.random() * length);
}

/**
 * KataCode 编码
 */
export async function encodeKata(str: string) {
  if (typeof str !== 'string') {
    throw new Error('invalid katacode input');
  }
  str = str.trim();
  if (str === '') {
    return '';
  }

  const data = [];
  for (const char of str) {
    // 拆分字符转换为 code point
    const codePoint = char.codePointAt(0);
    if (!codePoint) {
      throw new Error('error encoding kata code');
    }
    // 转换为 35 进制数值
    const charCode = codePoint.toString(35);
    // 将 35 进制数值的每一位对应到片假名
    let out = '';
    for (const key of charCode) {
      const outChar = DICT_IDX_CHAR[key] as string;
      out += outChar;
    }
    data.push(out);
    // 推送一个分隔符
    const randIdx = rand(SPLIT_CODE_ARR.length);
    const outChar = (DICT_IDX_CHAR['|'] as string[])[randIdx];
    data.push(outChar);
  }

  // 去除最后一个分隔符
  data.pop();
  return data.join('');
}

/**
 * KataCode 解码
 */
export async function decodeKata(str: string) {
  if (typeof str !== 'string') {
    throw new Error('invalid katacode input');
  }
  str = str.trim();
  if (str === '') {
    return '';
  }

  let tmp = '';

  // 反向转换为 35 进制数值的每一位
  for (const char of str) {
    if (char === ' ' || char === '\n' || char === '\r') {
      continue;
    }
    if (char === '-') {
      break;
    }
    tmp += DICT_CHAR_IDX[char];
  }
  // 拆分并解析
  const res = tmp.split('|');
  return res
    .map((val) => {
      const codePoint = Number.parseInt(val, 35);
      try {
        const char = String.fromCodePoint(codePoint);
        return char;
      } catch (e) {
        console.error(e);
        throw new Error('error decoding kata code');
      }
    })
    .join('');
}
