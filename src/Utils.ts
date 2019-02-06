const NumberMap: { [key: string]: string } = {
  '0': 'không',
  '1': 'một',
  '2': 'hai',
  '3': 'ba',
  '4': 'bốn',
  '5': 'năm',
  '6': 'sáu',
  '7': 'bảy',
  '8': 'tám',
  '9': 'chín'
}

export class NotNumberError extends Error {
  constructor(wrongNumber?: string) {
    const message = `Invalid number: ${wrongNumber}`
    super(message)
    Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
  }
}

export function getNumberFromMap(number: string[1]): string {
  if (NumberMap.hasOwnProperty(number)) {
    return NumberMap[number]
  } else {
    throw new NotNumberError(number)
  }
}
