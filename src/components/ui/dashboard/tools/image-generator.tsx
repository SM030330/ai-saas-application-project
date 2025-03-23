import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ImageGenerator = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <form action="" className="space-y-4">
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
          <Button type="submit">画像を生成する</Button>
        </form>
      </div>
      {/* image preview */}
      <div></div>
    </div>
  );
};

export default ImageGenerator;
