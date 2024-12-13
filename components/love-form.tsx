'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  name1: string
  birthday1: string
  gender1: string
  name2: string
  birthday2: string
  gender2: string
}

export default function LoveForm() {
  const [result, setResult] = useState<string>('')
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    const score = Math.floor(Math.random() * 41) + 60
    const compatibility = calculateCompatibility(score)
    setResult(compatibility)
  }

  const calculateCompatibility = (score: number) => {
    if (score >= 90) return `太棒了！你们的契合度高达${score}%！你们简直是天生一对！`
    if (score >= 80) return `很不错！你们的契合度为${score}%，有很大的发展潜力！`
    if (score >= 70) return `还不错！你们的契合度为${score}%，继续努力！`
    return `你们的契合度为${score}%，或许需要更多了解对方。`
  }

  const inputClassName = "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
  const selectClassName = "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"

  // ... 其他代码保持不变 ...

return (
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
    <div className="space-y-6">
      <div className="p-6 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-700 mb-4">第一个人的信息</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
            <input
              {...register('name1', { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="请输入姓名"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">生日</label>
            <input
              {...register('birthday1', { required: true })}
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">性别</label>
            <select
              {...register('gender1', { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="">请选择性别</option>
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-6 bg-purple-50 rounded-lg">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">第二个人的信息</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
            <input
              {...register('name2', { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="请输入姓名"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">生日</label>
            <input
              {...register('birthday2', { required: true })}
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">性别</label>
            <select
              {...register('gender2', { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">请选择性别</option>
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <button
      type="submit"
      className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
    >
      开始预测
    </button>

    {result && (
      <div className="mt-6 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
        <p className="text-lg text-center font-medium text-gray-800">{result}</p>
      </div>
    )}
  </form>
)
}