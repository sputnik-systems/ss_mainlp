import React from 'react'
import ProductPageTemplate from 'templates/ProductPageTemplate'
import HomeNav from 'features/Home/Nav'

export default function HomePage({ ...props }) {
  return (
    <ProductPageTemplate nav={<HomeNav />}>
      <div>product 1</div>
      <div>product 2</div>
    </ProductPageTemplate>
  )
}
