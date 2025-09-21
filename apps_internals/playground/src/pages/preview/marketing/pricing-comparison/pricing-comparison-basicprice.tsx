import {
  Frequency,
  FrequencyEnum,
  PricingComparisonBase,
  PricingFeatures,
  pricingProps,
  Tier,
  TiersEnum
} from '@vx-pro/marketing-pricingcomparison-basicprice'

const pricing_comparison_basicprice = () => {
  const frequencies: Array<Frequency> = [
    { key: FrequencyEnum.Yearly, label: 'Pay Yearly', priceSuffix: 'per year' },
    {
      key: FrequencyEnum.Quarterly,
      label: 'Pay Quarterly',
      priceSuffix: 'per quarter'
    }
  ]

  const tiers: Array<Tier> = [
    {
      key: TiersEnum.Free,
      title: 'Free',
      price: 'Free',
      href: '#',
      featured: false,
      mostPopular: false,
      description: 'For starters and hobbyists that want to try out.',
      features: [
        '10 users included',
        '2 GB of storage',
        'Help center access',
        'Email support'
      ],
      buttonText: 'Continue with Free',
      buttonColor: 'default',
      buttonVariant: 'flat'
    },
    {
      key: TiersEnum.Pro,
      title: 'Pro',
      description: 'For small teams that have less that 10 members.',
      href: '#',
      mostPopular: true,
      price: {
        yearly: '$72',
        quarterly: '$24'
      },
      featured: false,
      features: [
        '20 users included',
        '10 GB of storage',
        'Help center access',
        'Priority email support'
      ],
      buttonText: 'Get started',
      buttonColor: 'primary',
      buttonVariant: 'solid'
    },
    {
      key: TiersEnum.Team,
      title: 'Team',
      href: '#',
      featured: true,
      mostPopular: false,
      description: 'For large teams that have more than 10 members.',
      price: {
        yearly: '$90',
        quarterly: '$120'
      },
      priceSuffix: 'per user',
      features: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support'
      ],
      buttonText: 'Contact us',
      buttonColor: 'default',
      buttonVariant: 'flat'
    }
  ]

  const features: PricingFeatures = [
    {
      title: 'Content',
      items: [
        {
          title: 'New apps & screens releases',
          tiers: {
            [TiersEnum.Free]: 'Latest 4 apps',
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText:
            'Enjoy over 1,000+ screens uploaded every week. Get notified via email whenever new screens are added.'
        },
        {
          title: 'Access to latest versions',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText:
            'Access to latest screenshots of an app cataloged by expert curators.'
        },
        {
          title: 'Access to previous versions',
          tiers: {
            [TiersEnum.Free]: 'Limited to 3 rows',
            [TiersEnum.Pro]: 'Unlimited',
            [TiersEnum.Team]: 'Unlimited'
          },
          helpText: 'Version travel across versions of an app cataloged.'
        },
        {
          title: 'Access to flows of apps',
          tiers: {
            [TiersEnum.Free]: 'Limited to 3 rows',
            [TiersEnum.Pro]: 'Unlimited',
            [TiersEnum.Team]: 'Unlimited'
          },
          helpText:
            'Access to screens organized by flows like onboarding or login.'
        },
        {
          title: 'Filter & search results',
          tiers: {
            [TiersEnum.Free]: 'Limited to 3 rows',
            [TiersEnum.Pro]: 'Unlimited',
            [TiersEnum.Team]: 'Unlimited'
          },
          helpText:
            'Find apps, screens, or flows by filtering across 10,000+ screens.'
        }
      ]
    },
    {
      title: 'Features',
      items: [
        {
          title: 'Collections',
          tiers: {
            [TiersEnum.Free]: 'Up to 3 collections',
            [TiersEnum.Pro]: 'Unlimited',
            [TiersEnum.Team]: 'Unlimited'
          },
          helpText:
            'Save apps, screens or flows into collections for later viewing.'
        },
        {
          title: 'Copy to clipboard',
          tiers: {
            [TiersEnum.Free]: true,
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText:
            'Quickly copy screens into your clipboard to be pasted into other tools.'
        },
        {
          title: 'Screen download',
          tiers: {
            [TiersEnum.Free]: true,
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText: 'Download screens as PNG.'
        },
        {
          title: 'Batch download',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText:
            'Easily batch-download multiple screens at one go from apps, flows, your collections and more.'
        }
      ]
    },
    {
      title: 'Collaboration',
      items: [
        {
          title: 'Team members',
          tiers: {
            [TiersEnum.Free]: 'Just you',
            [TiersEnum.Pro]: 'Just you',
            [TiersEnum.Team]: 'Unlimited'
          },
          helpText: 'Collaborate with other users in a team.'
        },
        {
          title: 'Team collections',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText: 'Create collections shared across your team.'
        },
        {
          title: 'Team administration',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Add or remove members from your team to manage access to membership and collections.'
        },
        {
          title: 'Flexible seat-based licensing',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Membership licenses are purchased by seats, which can be provisioned to or removed from users.'
        }
      ]
    },
    {
      title: 'Security & Access',
      items: [
        {
          title: 'SAML Single Sign-On (SSO)',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Access through Okta, ADFS, Azure, Onelogin, or your own SAML identity provider (IdP).'
        },
        {
          title: 'SCIM user provisioning',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Sync user directories with Okta, Azure AD, Onelogin, or your own SCIM identity provider (IdP).'
        }
      ]
    },
    {
      title: 'Billing',
      items: [
        {
          title: 'Flexible payment options',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Option to pay via invoice and bank transfers on a net 30, 45 or 60 payment term. Available upon request.'
        },
        {
          title: 'Custom security assessment',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Our team will help answer security assessments or questionnaires for your organization. Available upon request.'
        },
        {
          title: 'Custom agreement',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Standardized SaaS agreement for your organization’s legal requirement. Available upon request.'
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          title: 'Help center',
          tiers: {
            [TiersEnum.Free]: true,
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText:
            'Browse our articles in our knowledge base to find answers to your questions regarding the platform.'
        },
        {
          title: 'Email support',
          tiers: {
            [TiersEnum.Free]: 'Best effort basis',
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText: 'Get help via email.'
        }
      ]
    }
  ]

  const data: pricingProps = {
    title: 'Pricing',
    mainHeading: 'Compare plans & features.',
    subHeading: 'Discover the ideal plan, beginning at under $2 per week.',
    tableHead: 'Pricing plan comparison',
    tablePrice: 'Price',
    footerText: ' Are you an open source developer?',
    footerLinkText: '   Get a discount'
  }

  return (
    <div>
      <PricingComparisonBase
        data={data}
        features={features}
        tiers={tiers}
        frequencies={frequencies}
      />
    </div>
  )
}

export default pricing_comparison_basicprice
