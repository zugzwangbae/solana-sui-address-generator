import { generateSolanaAddress, generateSuiAddress } from '../index';

describe('Address Generator', () => {
  describe('generateSolanaAddress', () => {
    it('should generate an address ending with the specified pattern', () => {
      const pattern = 'test';
      const result = generateSolanaAddress(pattern);

      expect(result.publicKey).toBeDefined();
      expect(result.privateKey).toBeDefined();
      expect(result.publicKey.toLowerCase().endsWith(pattern.toLowerCase())).toBe(true);
    });

    it('should respect case sensitivity option', () => {
      const pattern = 'TEST';
      const result = generateSolanaAddress(pattern, { caseSensitive: true });

      expect(result.publicKey.endsWith(pattern)).toBe(true);
    });

    it('should timeout after specified duration', () => {
      expect(() => {
        generateSolanaAddress('impossiblepattern', { timeout: 100 });
      }).toThrow('Timeout reached while generating address');
    });
  });

  describe('generateSuiAddress', () => {
    it('should generate an address ending with the specified pattern', () => {
      const pattern = 'test';
      const result = generateSuiAddress(pattern);

      expect(result.publicKey).toBeDefined();
      expect(result.privateKey).toBeDefined();
      expect(result.publicKey.toLowerCase().endsWith(pattern.toLowerCase())).toBe(true);
    });

    it('should respect case sensitivity option', () => {
      const pattern = 'TEST';
      const result = generateSuiAddress(pattern, { caseSensitive: true });

      expect(result.publicKey.endsWith(pattern)).toBe(true);
    });

    it('should timeout after specified duration', () => {
      expect(() => {
        generateSuiAddress('impossiblepattern', { timeout: 100 });
      }).toThrow('Timeout reached while generating address');
    });
  });
});
