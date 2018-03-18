export const COMPARE_ENUM = {
    LT: 'LT',
    GT: 'GT',
    EQUAL: 'EQUAL'
};

export function compareValue (a, b) {
    if (a < b) {
      return COMPARE_ENUM.LT
    }
    
    if (a > b) {
      return COMPARE_ENUM.GT
    }
    
    else return COMPARE_ENUM.EQUAL
}