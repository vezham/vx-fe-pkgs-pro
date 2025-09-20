import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { Button } from '@vx-oss/react'
import { BannerInverted, bannerProps } from '@vx-pro/marketing-banner-inverted'

const banner_inverted = () => {
  const data: bannerProps = {
    linkText:
      '  The Winter 2024 Release is here: new editor, analytics API, and so much more.',
    linkActions: (
      <Button
        as={Link}
        className="group text-small text-background relative h-9 overflow-hidden bg-transparent font-normal"
        color="default"
        endContent={
          <Icon
            className="flex-none outline-hidden transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-2"
            icon="solar:arrow-right-linear"
            width={16}
          />
        }
        href="#"
        style={{
          border: 'solid 2px transparent',
          backgroundImage: `linear-gradient(hsl(var(--heroui-foreground)), hsl(var(--heroui-foreground))), linear-gradient(to right, #F871A0, #9353D3)`,
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box'
        }}
        variant="bordered">
        Explore
      </Button>
    ),
    actions: (
      <Button isIconOnly className="-m-1" size="sm" variant="light">
        <span className="sr-only">Close Banner</span>
        <Icon className="text-background/50" icon="lucide:x" width={20} />
      </Button>
    )
  }

  return (
    <div>
      <BannerInverted data={data} />
    </div>
  )
}

export default banner_inverted
