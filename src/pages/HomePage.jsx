import React from 'react'
import ProductPageTemplate from 'templates/ProductPageTemplate'
import ProductNav from 'features/Product/Nav'
import ProductCard from 'features/Product/Card'
import ParallaxItem from 'components/ParallaxItem'
import Link from 'components/Link'
import logoPath from 'features/Home/logoPath'

export default function HomePage({ ...props }) {
  return (
    <ProductPageTemplate
      {...props}
      nav={
        <ProductNav
          path={logoPath}
          style={{ gridColumn: '1/17' }}
          right={
            <>
              <Link variant="nav">Для партнеров и бизнеса</Link>
              <Link variant="nav">Безопасность и комфорт</Link>
            </>
          }
        />
      }
      gridProps={{
        style: {
          gridRowGap: 'var(--spacing-xxl)',
        },
        pt: '7',
      }}
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
