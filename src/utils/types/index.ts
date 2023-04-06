export type TextType =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6'
  | 'body1'
  | 'body2'
  | 'body3';

export interface Testable {
  testID: string;
  accessibilityLabel?: string;
}
