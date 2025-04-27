export type GenerateImageState = {
  imageUrl?: string;
  error?: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  keyword?: string;
};
