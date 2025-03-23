import { tools, ToolType } from '@/config/tools';
import { notFound } from 'next/navigation';
import PageContainer from '@/components/ui/dashboard/page-container';
import PageHeader from '@/components/ui/dashboard/page-header';
// next15で非同期取得しないとwarningが出るため
const ToolPage = async ({ params }: { params: Promise<{ tool: string }> }) => {
  const toolType = (await params).tool as ToolType;
  const tool = tools[toolType];

  if (!tool) {
    notFound();
  }

  const ToolComponent = tool.component;

  return (
    <PageContainer>
      <PageHeader title={tool.title} description={tool.description} />
      <div className="max-w-2xl">
        <ToolComponent />
      </div>
    </PageContainer>
  );
};

export default ToolPage;
