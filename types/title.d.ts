export type Title = {
  content: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1';
  component: React.ElementType<any>;
};
