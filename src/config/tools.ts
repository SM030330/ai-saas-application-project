import ImageGenerator from '@/components/ui/dashboard/tools/image-generator';

export const tools = {
  'image-generator': {
    title: '画像生成',
    description: 'AIを使用してお好みの画像を生成してみよう',
    component: ImageGenerator,
  },
  'remove-bg': {
    title: '背景削除',
    description: 'AIを使用してお好みの画像を生成してみよう',
    component: ImageGenerator,
  },
  optimize: {
    title: '画像圧縮',
    description: 'AIを使用してお好みの画像を生成してみよう',
    component: ImageGenerator,
  },
};

export type ToolType = keyof typeof tools;
