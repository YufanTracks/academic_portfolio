'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 联系方式 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              联系方式
            </h3>
            <div className="mt-4 space-y-2">
              <p className="text-base text-gray-500">
                <span className="font-medium">邮箱：</span>
                your.email@example.com
              </p>
              <p className="text-base text-gray-500">
                <span className="font-medium">地址：</span>
                您的学校/机构地址
              </p>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              快速链接
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/research" className="text-base text-gray-500 hover:text-gray-900">
                  研究经历
                </a>
              </li>
              <li>
                <a href="/publications" className="text-base text-gray-500 hover:text-gray-900">
                  发表文章
                </a>
              </li>
              <li>
                <a href="/projects" className="text-base text-gray-500 hover:text-gray-900">
                  项目展示
                </a>
              </li>
            </ul>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              关注我
            </h3>
            <div className="mt-4 space-y-2">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                ResearchGate
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} 您的姓名. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 