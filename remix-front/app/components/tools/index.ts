export const sleep = (waitMsec: number) => {
  var startMsec = new Date();

  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date().getTime() - startMsec.getTime() < waitMsec);
};
