import LoveForm from '../components/love-form'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">
              AI 恋爱契合度预测
            </h1>
            <p className="text-gray-600">
              输入两个人的信息，让 AI 为你分析你们的契合程度
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <LoveForm />
          </div>
          
          <div className="text-center mt-6 text-sm text-gray-500">
            注：本预测仅供娱乐，请勿当真
          </div>
        </div>
      </div>
    </div>
  )
}