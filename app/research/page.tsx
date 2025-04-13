export default function Research() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">研究经历</h1>
            <p className="mt-4 text-xl text-gray-500">
              展示我在野生动物保护和生态系统研究领域的经历
            </p>
          </div>
        </div>
      </div>

      {/* Research Experience */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Research Project 1 */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900">研究项目一</h3>
              <div className="mt-2 text-sm text-gray-500">2023 - 现在</div>
              <p className="mt-4 text-gray-600">
                在这里详细描述您的研究项目，包括：
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>研究目标和意义</li>
                  <li>使用的研究方法</li>
                  <li>主要研究成果</li>
                  <li>项目影响力</li>
                </ul>
              </p>
            </div>
          </div>

          {/* Research Project 2 */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900">研究项目二</h3>
              <div className="mt-2 text-sm text-gray-500">2022 - 2023</div>
              <p className="mt-4 text-gray-600">
                在这里详细描述您的研究项目，包括：
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>研究目标和意义</li>
                  <li>使用的研究方法</li>
                  <li>主要研究成果</li>
                  <li>项目影响力</li>
                </ul>
              </p>
            </div>
          </div>

          {/* Field Work Experience */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900">野外工作经历</h3>
              <div className="mt-2 text-sm text-gray-500">多个时间段</div>
              <p className="mt-4 text-gray-600">
                描述您的野外考察和研究经历：
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>考察地点和时间</li>
                  <li>研究对象</li>
                  <li>使用的技术和方法</li>
                  <li>主要发现</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 