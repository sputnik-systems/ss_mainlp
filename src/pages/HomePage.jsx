import React from 'react'
import ProductPageTemplate from 'templates/ProductPageTemplate'
import ProductNav from 'features/Product/Nav'
import ProductCard from 'features/Product/Card'
import ParallaxItem from 'components/ParallaxItem'
import Link from 'components/Link'

const products = [
  {
    title: 'Спутник',
    subtitle: 'Мобильное приложение.',
    column: 'full',
    cta: 'Установить',
    ctaPrimary: '/app/order',
    ctaSecondary: '/app',
  },
  {
    title: 'Спутник Локки',
    subtitle: 'Ключ от домофона.',
    column: 'full',
    cta: 'Купить',
    ctaPrimary: '/lokki/order',
    ctaSecondary: '/lokki',
  },
  {
    title: 'Спутник Óдин',
    subtitle: 'Народный домофон.',
    cta: 'Оставить заявку',
    ctaPrimary: '/sputnik/order',
    ctaSecondary: '/sputnik',
    column: 'full',
  },
  {
    title: 'Алиса',
    subtitle: 'Голосовая колонка.',
    cta: 'Купить',
    column: 'productLeft',
  },
  {
    title: 'Аск',
    subtitle: 'Домофонные трубка.',
    cta: 'Купить',
    column: 'productRight',
  },
]

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
          gridRowGap: 0,
        },
        pt: '7',
      }}
    >
      {products.map((product) => (
        <ParallaxItem column={product.column}>
          <ProductCard
            title={product.title}
            subtitle={product.subtitle}
            cta={product.cta}
            ctaPrimary={product.ctaPrimary}
            ctaSecondary={product.ctaSecondary}
          />
        </ParallaxItem>
      ))}

      {/*
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
      </ParallaxItem> */}
    </ProductPageTemplate>
  )
}
