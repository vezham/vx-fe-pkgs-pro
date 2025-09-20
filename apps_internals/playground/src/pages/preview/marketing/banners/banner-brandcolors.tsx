import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { Button } from '@vx-oss/react'

import {
  BannerBrandColors,
  bannerProps
} from '@vx-pro/marketing-banner-brandcolors'

const banner_brandcolors = () => {
  const data: bannerProps = {
    linkText:
      ' The Winter 2024 Release is here: new editor, analytics API, and so much more.',
    linkActions: (
      <Button
        as={Link}
        className="group bg-primary-foreground text-small text-primary relative h-9 overflow-hidden font-medium"
        color="default"
        endContent={
          <Icon
            className="flex-none outline-hidden transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-2"
            icon="solar:arrow-right-linear"
            width={16}
          />
        }
        href="#"
        radius="full">
        Explore
      </Button>
    ),
    actions: (
      <Button
        isIconOnly
        aria-label="Close Banner"
        className="-m-1"
        size="sm"
        variant="light">
        <Icon
          aria-hidden="true"
          className="text-primary-foreground"
          icon="lucide:x"
          width={20}
        />
      </Button>
    )
  }

  return (
    <div>
      <BannerBrandColors data={data} />
    </div>
  )
}

export default banner_brandcolors
