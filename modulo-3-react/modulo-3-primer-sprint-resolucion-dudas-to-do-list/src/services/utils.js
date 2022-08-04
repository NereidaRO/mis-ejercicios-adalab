function uuid() {
  const timestampPart = '' + new Date().getTime();
  const serialPart = '' + parseInt(Math.random() * 1000);

  const uuid = timestampPart.substring(8) + serialPart.padStart(3, '0');

  return uuid;
}

export { uuid };
