export const buttonVariants = {
  primary: 'px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700',
  secondary: 'px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200',
  outline: 'px-6 py-3 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-50',
} as const;

export const inputStyles = {
  base: 'w-full rounded border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500',
  number: 'p-2',
  color: 'h-8 p-1',
} as const;