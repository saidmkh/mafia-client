export interface Props {
  text: string;
  href?: string;
  onClick?: (event) => void;
  type?: 'submit' | 'reset' | 'button';
  tabIndex?: number;
  disable?: boolean;
  loading?: boolean;
}
