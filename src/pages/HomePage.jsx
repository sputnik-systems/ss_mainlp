import React from 'react'
import ProductPageTemplate from 'templates/ProductPageTemplate'
import ProductNav from 'features/Product/Nav'
import ProductCard from 'features/Product/Card'
import ParallaxItem from 'components/ParallaxItem'
import Link from 'components/Link'

export default function HomePage({ ...props }) {
  return (
    <ProductPageTemplate
      {...props}
      // nav={
      //   <ProductNav
      //     // path={logoPath}
      //     style={{ gridColumn: '1/17' }}
      //     right={
      //       <>
      //         {/* <Link variant="nav">Для партнеров и бизнеса</Link> */}
      //         {/* <Link variant="nav">Безопасность и комфорт</Link> */}
      //       </>
      //     }
      //   />
      // }
      gridProps={{
        style: {
          gridRowGap: 'var(--spacing-xxl)',
        },
        pt: '7',
      }}
    >
      <ParallaxItem style={{ gridColumn: '1/17' }}>
        <ProductCard
          title="Спутник"
          subtitle="Мобильное приложение."
          cta="Установить"
        />
      </ParallaxItem>
      <ParallaxItem style={{ gridColumn: '1/17' }}>
        <ProductCard
          title="Спутник Локки"
          subtitle="Ключ от домофона."
          cta="Купить"
          ctaPrimary="/sputnik/order"
          ctaSecondary="/sputnik"
        />
      </ParallaxItem>
      <ParallaxItem style={{ gridColumn: '1/17' }}>
        <ProductCard
          title="Спутник Óдин"
          subtitle="Народный домофон."
          cta="Оставить заявку"
          ctaPrimary="/sputnik/order"
          ctaSecondary="/sputnik"
        />
      </ParallaxItem>

      <ParallaxItem style={{ gridColumn: '2/9' }}>
        <ProductCard title="Алиса" subtitle="Голосовая колонка." cta="Купить" />
      </ParallaxItem>
      <ParallaxItem style={{ gridColumn: '9/16' }}>
        <ProductCard title="Аск" subtitle="Домофонные трубка." cta="Купить" />
      </ParallaxItem>
      <ParallaxItem style={{ gridColumn: '2/9' }}>
        <ProductCard title="Изи" subtitle="Видеокамера." cta="Купить" />
      </ParallaxItem>
      <ParallaxItem style={{ gridColumn: '9/16' }}>
        <ProductCard title="StarterKit" subtitle="Умный дом." cta="Купить" />
      </ParallaxItem>
      <ParallaxItem style={{ gridColumn: '4/14' }}>
        <ProductCard
          title="Delta"
          subtitle="Личная безопасность."
          cta="Купить"
        />
      </ParallaxItem>
    </ProductPageTemplate>
  )
}
