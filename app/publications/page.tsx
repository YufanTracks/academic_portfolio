export default function Publications() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">发表文章</h1>
            <p className="mt-4 text-xl text-gray-500">
              学术论文、会议报告和其他研究成果
            </p>
          </div>
        </div>
      </div>

      {/* Publications List */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Journal Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">期刊论文</h2>
          <div className="space-y-8">
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">论文标题</h3>
                <p className="mt-2 text-sm text-gray-500">
                  作者列表
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  期刊名称, 年份, 卷(期), 页码
                </p>
                <p className="mt-4 text-gray-600">
                  论文简介和主要发现
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    查看论文 →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conference Presentations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">会议报告</h2>
          <div className="space-y-8">
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">报告标题</h3>
                <p className="mt-2 text-sm text-gray-500">
                  会议名称, 地点
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  时间
                </p>
                <p className="mt-4 text-gray-600">
                  报告内容简介
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Publications */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">其他出版物</h2>
          <div className="space-y-8">
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">出版物标题</h3>
                <p className="mt-2 text-sm text-gray-500">
                  出版类型（如：技术报告、科普文章等）
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  出版时间, 出版方
                </p>
                <p className="mt-4 text-gray-600">
                  内容简介
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 