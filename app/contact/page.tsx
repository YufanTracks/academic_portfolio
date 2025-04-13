export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">联系方式</h1>
            <p className="mt-4 text-xl text-gray-500">
              欢迎通过以下方式与我联系
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Academic Information */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">学术信息</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">所在机构</h3>
                  <p className="mt-2 text-gray-600">
                    您的学校/研究机构名称
                    <br />
                    院系名称
                    <br />
                    具体地址
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">学术邮箱</h3>
                  <p className="mt-2 text-gray-600">
                    your.email@university.edu
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">办公室</h3>
                  <p className="mt-2 text-gray-600">
                    办公楼 XXX室
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Academic Profiles */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">学术主页</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">学术档案</h3>
                  <div className="mt-2 space-y-2">
                    <a
                      href="#"
                      className="block text-indigo-600 hover:text-indigo-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Scholar
                    </a>
                    <a
                      href="#"
                      className="block text-indigo-600 hover:text-indigo-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ResearchGate
                    </a>
                    <a
                      href="#"
                      className="block text-indigo-600 hover:text-indigo-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ORCID
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">社交媒体</h3>
                  <div className="mt-2 space-y-2">
                    <a
                      href="#"
                      className="block text-indigo-600 hover:text-indigo-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="block text-indigo-600 hover:text-indigo-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 