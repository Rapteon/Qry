export interface QRConfiguration {
    width: number;
    errorCorrectionLevel: 'L' | 'M' | 'H';
    version: number;
    cssClass?: string;
    alt?: string;
}