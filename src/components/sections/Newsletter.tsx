

export default function Newsletter() {
  return (
    <>
     <footer className="bg-gray-100 py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-header">Subscribe to Newsletter</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Furni.</h2>
            <p className="text-gray-600">
              Quisque mi urna, consequat et quam in, varius consequat lacus. In et nisi lobortis felis ornare semper. 
              Mauris lacinia, tortor vitae suscipit euismod, enim nunc vehicula ante, eu pellentesque est ex ut dui.
            </p>
          </div>
        </div>

       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4">About us</h4>
            <ul className="space-y-2">
              {['Services', 'Blog', 'Contact us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {['Knowledge base', 'Live chat'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Jobs</h4>
            <ul className="space-y-2">
              {['Our team', 'About', 'Privacy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {['Nordic Chair', 'Kruzo Aero', 'Ergonomic Chair'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2021 Untree.co. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
