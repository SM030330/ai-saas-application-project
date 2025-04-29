'use client';

import { generateImage } from '@/actions/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { GenerateImageState } from '@/types/actions';
import { Download, ImageIcon } from 'lucide-react';
import { useActionState } from 'react';
import LoadingSpinner from '../loading-spinner';

const initialState: GenerateImageState = {
  status: 'idle',
};

const ImageGenerator = () => {
  const [state, formAction, pending] = useActionState(generateImage, initialState);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keyword">キーワード</Label>
            <Input
              id="keyword"
              name="keyword"
              placeholder="作成したい画像のキーワードを入力(例: キャラクターの顔)"
              required
            />
          </div>
          {/* submit botton */}
          <Button
            disabled={pending}
            className={cn('w-full duration-200', pending && 'bg-primary/80')}
            type="submit"
          >
            {pending ? (
              <LoadingSpinner />
            ) : (
              <>
                <ImageIcon className="mr-2" />
                画像を生成する
              </>
            )}
          </Button>
        </form>
      </div>

      {state.imageUrl && (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-background">
            <div className="aspect-video relative">
              <img
                src={state.imageUrl}
                alt="Generated image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Button className="w-full " variant={'secondary'}>
            <Download className="mr-2" />
            ダウンロード
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
