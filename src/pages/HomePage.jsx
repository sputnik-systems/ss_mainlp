import React from 'react'
import ProductPageTemplate from 'templates/ProductPageTemplate'
import ProductNav from 'features/Product/Nav'
import ProductCard from 'features/Product/Card'
import ParallaxItem from 'components/ParallaxItem'
import Link from 'components/Link'
import { useTranslation } from 'react-i18next'

// ns, cta, ctaPrimary?, ctaSecondary?, column, disabled?
const products = [
  {
    ns: 'mobile_app',
    cta: 'install',
    ctaPrimary: '/app/order',
    ctaSecondary: '/app',
    column: 'full',
  },
  {
    ns: 'loki',
    cta: 'buy',
    ctaPrimary: '/loki/order',
    ctaSecondary: '/loki',
    column: 'full',
  },
  {
    ns: 'tor',
    cta: 'submit_application',
    ctaPrimary: '/sputnik/order',
    ctaSecondary: '/sputnik',
    column: 'full',
  },
  {
    ns: 'yandex_alice',
    cta: 'buy',
    column: 'productLeft',
    disabled: true,
  },
  {
    ns: 'ask',
    cta: 'buy',
    column: 'productRight',
    disabled: true,
  },
  {
    ns: 'izi',
    cta: 'buy',
    column: 'productLeft',
    disabled: true,
  },
  {
    ns: 'starter_kit',
    cta: 'buy',
    column: 'productRight',
    disabled: true,
  },
  {
    ns: 'delta',
    cta: 'buy',
    column: 'center',
    disabled: true,
  },
]

export default function HomePage({ ...props }) {
  const { t } = useTranslation(['common', ...products.map((p) => p.ns)])

  return (
    <ProductPageTemplate
      {...props}
      gridProps={{
        style: {
          gridRowGap: 0,
        },
        pt: '7',
      }}
    >
      {products.map((product) => (
        <ParallaxItem column={product.column} key={product.ns}>
          <ProductCard
            {...product}
            title={t(`${product.ns}:name`)}
            subtitle={t(`${product.ns}:description`)}
            cta={t(`common:button.${product.cta}`)}
            ctaPrimary={product.ctaPrimary}
            ctaSecondary={product.ctaSecondary}
          />
        </ParallaxItem>
      ))}
    </ProductPageTemplate>
  )
}
