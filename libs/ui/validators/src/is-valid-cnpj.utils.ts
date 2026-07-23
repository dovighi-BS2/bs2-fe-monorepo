// Blacklist common values.
const BLACKLIST: Array<string> = [
  '00000000000000',
  '11111111111111',
  '22222222222222',
  '33333333333333',
  '44444444444444',
  '55555555555555',
  '66666666666666',
  '77777777777777',
  '88888888888888',
  '99999999999999',
];

// ── Constantes para CNPJ alfanumérico (IN RFB 2.229/2024) ──────────────────
const PESOS_DV = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const VALOR_BASE = '0'.charCodeAt(0); // 48
const TAMANHO_CNPJ_SEM_DV = 12;
const REGEX_BASE_ALFANUMERICO = /^[A-Z0-9]{12}$/;
const REGEX_DV = /^[0-9]{2}$/;
const REGEX_VALOR_ZERADO = /^[0]+$/;

// ── Regex de strip ──────────────────────────────────────────────────────────
// Modo estrito: remove apenas separadores de máscara
const STRICT_STRIP_REGEX = /[-/.]/g;
// Modo não-estrito: remove separadores E espaços, mantendo letras e dígitos
const LOOSE_STRIP_REGEX = /[\s.\\/\-]/g;

// ── strip & format ──────────────────────────────────────────────────────────
const strip = (number: string, strict?: boolean): string => {
  const regex: RegExp = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
  return (number || '').replace(regex, '').toUpperCase();
};

const format = (number: string): string => {
  const s = strip(number);
  // Formato XX.XXX.XXX/XXXX-DD — funciona para dígitos e letras A-Z
  return s.replace(/^([A-Z0-9]{2})([A-Z0-9]{3})([A-Z0-9]{3})([A-Z0-9]{4})(\d{2})$/, '$1.$2.$3/$4-$5');
};

// ── Algoritmo CORRETO RFB (conversão ASCII−48, direita→esquerda) ────────────
const calcDigitoAlfanumerico = (cnpj: string): number => {
  let soma = 0;
  for (let i = cnpj.length - 1; i >= 0; i--) {
    const valorChar = cnpj.charCodeAt(i) - VALOR_BASE;
    const pesoIndex = PESOS_DV.length - cnpj.length + i;
    if (pesoIndex < 0 || pesoIndex >= PESOS_DV.length) return 0;
    soma += valorChar * PESOS_DV[pesoIndex];
  }
  const resto = soma % 11;
  return resto < 2 ? 0 : 11 - resto;
};

const calcularDVAlfanumerico = (base12: string): string => {
  if (!REGEX_BASE_ALFANUMERICO.test(base12)) return '';
  const dv1 = calcDigitoAlfanumerico(base12);
  const dv2 = calcDigitoAlfanumerico(base12 + dv1);
  return `${dv1}${dv2}`;
};

const validarCnpjAlfanumerico = (cnpj: string): boolean => {
  if (cnpj.length !== 14) return false;
  const base = cnpj.substring(0, TAMANHO_CNPJ_SEM_DV);
  const dv   = cnpj.substring(TAMANHO_CNPJ_SEM_DV, 14);
  if (!REGEX_BASE_ALFANUMERICO.test(base)) return false;
  if (!REGEX_DV.test(dv)) return false;
  if (REGEX_VALOR_ZERADO.test(cnpj)) return false;
  return dv === calcularDVAlfanumerico(base);
};

// ── Algoritmo ORIGINAL para CNPJ totalmente numérico (mantido intacto) ──────
const verifierDigit = (digits: string): number => {
  let index = 2;
  const reverse: Array<number> = digits.split('').reduce((buffer: number[], number: string) => {
    return [parseInt(number, 10)].concat(buffer);
  }, []);

  const sum: number = reverse.reduce((buffer: number, number: number) => {
    buffer += number * index;
    index = index === 9 ? 2 : index + 1;
    return buffer;
  }, 0);

  const mod: number = sum % 11;
  return mod < 2 ? 0 : 11 - mod;
};

// ── Ponto de entrada principal ───────────────────────────────────────────────
export const isValidCnpj = (number: string, strict?: boolean): boolean => {
  const stripped: string = strip(number, strict);

  // CNPJ must be defined
  if (!stripped) {
    return false;
  }

  // CNPJ must have 14 chars
  if (stripped.length !== 14) {
    return false;
  }

  // CNPJ can't be blacklisted
  if (BLACKLIST.includes(stripped)) {
    return false;
  }

  // Detecta CNPJ alfanumérico (contém ao menos uma letra)
  const isAlfanumerico = /[A-Z]/.test(stripped);

  if (isAlfanumerico) {
    return validarCnpjAlfanumerico(stripped);
  }

  // CNPJ totalmente numérico — lógica original mantida
  let numbers: string = stripped.substr(0, 12);
  numbers += verifierDigit(numbers);
  numbers += verifierDigit(numbers);

  return numbers.substr(-2) === stripped.substr(-2);
};

export { strip as stripCnpj, format as formatCnpj };
