const useColor = () => {
  const colors = ['bg-green-500', 'bg-red-500', 'bg-blue-500', 'bg-yellow-500']
  const getColor = (index) => color[index % colors.length]
  return { getColor }
}

export default useColor
