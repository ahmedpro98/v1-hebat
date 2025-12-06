import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  schemaType?: 'WebPage' | 'Organization' | 'LocalBusiness' | 'Product' | 'Service';
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = 'https://lovable.dev/opengraph-image-p98pqg.png',
  type = 'website',
  schemaType = 'WebPage',
  breadcrumbs = []
}) => {
  const { language, isRTL } = useLanguage();
  const location = useLocation();
  const currentUrl = `https://hibateast.com${location.pathname}`;

  // Default SEO data based on language
  const defaultSEO = {
    ar: {
      title: 'هبات ايست - نجف وثريات فاخرة | تركيب وصيانة احترافية',
      description: 'هبات ايست متخصصة في تركيب وصيانة النجف والثريات الفاخرة للفنادق والقصور والمنازل. خدمات احترافية وتشكيلة واسعة من أفخم الثريات',
      keywords: 'هبات ايست, نجف, ثريات, تركيب نجف, صيانة نجف, فنادق, قصور, ديكور فاخر, اضاءة, شراء نجف, تركيب ثريات, جدة, السعودية',
      siteName: 'هبات ايست'
    },
    en: {
      title: 'Hibat East - Luxury Chandeliers | Professional Installation & Maintenance',
      description: 'Hibat East specializes in luxury chandelier installation and maintenance for hotels, palaces, and homes. Professional services and wide selection of premium chandeliers',
      keywords: 'Hibat East, chandeliers, luxury lighting, chandelier installation, chandelier maintenance, hotels, palaces, luxury decor, lighting solutions, Jeddah, Saudi Arabia',
      siteName: 'Hibat East'
    }
  };

  const seoData = defaultSEO[language];
  const finalTitle = title ? `${title} | ${seoData.siteName}` : seoData.title;
  const finalDescription = description || seoData.description;
  const finalKeywords = keywords || seoData.keywords;

  // Create structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: seoData.siteName,
    description: finalDescription,
    url: currentUrl,
    image: image,
    ...(schemaType === 'LocalBusiness' && {
      '@type': 'LocalBusiness',
      name: seoData.siteName,
      image: image,
      telephone: '+966 50 000 0000',
      email: 'info@hebateast.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'King Faisal Road',
        addressLocality: 'Jeddah',
        addressCountry: 'SA'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '21.584524972944244',
        longitude: '39.18417487554701'
      },
      openingHours: 'Mo-Su 09:00-22:00',
      priceRange: '$$$',
      seriesAreaServed: 'Saudi Arabia'
    }),
    ...(breadcrumbs.length > 0 && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `https://hibateast.com${crumb.url}`
        }))
      }
    })
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} dir={isRTL ? 'rtl' : 'ltr'} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={seoData.siteName} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={finalTitle} />
      <meta property="og:site_name" content={seoData.siteName} />
      <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'ar' ? 'en_US' : 'ar_SA'} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hibateast" />
      <meta name="twitter:creator" content="@hibateast" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={finalTitle} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#D4AF37" />
      <meta name="msapplication-TileColor" content="#D4AF37" />
      <meta name="application-name" content={seoData.siteName} />
      <meta name="apple-mobile-web-app-title" content={seoData.siteName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />

      {/* Hreflang Tags */}
      <link rel="alternate" hrefLang="ar" href={currentUrl} />
      <link rel="alternate" hrefLang="en" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOHead;
