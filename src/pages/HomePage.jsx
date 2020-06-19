import React from 'react'
import ProductPageTemplate from 'templates/ProductPageTemplate'
import HomeNav from 'features/Home/Nav'
import ProductCard from 'features/Product/Card'
import ParallaxItem from 'components/ParallaxItem'

export default function HomePage({ ...props }) {
  return (
    <ProductPageTemplate
      {...props}
      nav={<HomeNav style={{ gridColumn: '1/17' }} />}
    >
      <ParallaxItem style={{ gridColumn: '1/17' }}>
        <ProductCard
          title="Народный домофон"
          cta="Заказать установку"
          ctaPrimary="/sputnik/order"
          ctaSecondary="/sputnik"
        />
      </ParallaxItem>
      <ParallaxItem style={{ gridColumn: '1/17' }}>
        <ProductCard title="Мобильное приложение" cta="Скачай бесплатно" />
      </ParallaxItem>
      <ParallaxItem style={{ gridColumn: '2/9' }}>
        <ProductCard title="Ключ" cta="Купить" />
      </ParallaxItem>
      <ParallaxItem style={{ gridColumn: '9/16' }}>
        <ProductCard title="Алиса" cta="Купить" />
      </ParallaxItem>
    </ProductPageTemplate>
  )
}
