import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">您的姓名</span>
              <span className="block text-2xl text-gray-600 mt-3">野生动物与自然保护区管理 / 生态学研究者</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              致力于野生动物保护和生态系统研究，专注于[您的具体研究方向]
            </p>
          </div>
        </div>
      </div>

      {/* Research Interests */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900">研究方向</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              主要研究领域包括野生动物行为学、栖息地保护和生态系统管理等方向
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Research Area 1 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">野生动物行为学</h3>
                    <p className="mt-5 text-base text-gray-500">
                      研究野生动物的行为模式、种群动态和栖息地选择等方面
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Area 2 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">生态系统管理</h3>
                    <p className="mt-5 text-base text-gray-500">
                      研究生态系统的结构、功能和管理策略
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Area 3 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">保护区规划</h3>
                    <p className="mt-5 text-base text-gray-500">
                      研究自然保护区的规划、管理和可持续发展
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">最新动态</h2>
          <div className="mt-8 space-y-6">
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">最新研究进展</h3>
                <p className="mt-2 text-base text-gray-500">
                  这里可以放置您最新的研究成果、发表的论文或参与的学术活动等信息
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
