import CategoryMenu from '/src/components/category-menu/category-menu.component'
import categories from '/src/assets/categories.json'

const Home = () => {
  return (
    <CategoryMenu categories={categories} />
  )
}

export default Home
