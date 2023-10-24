import { BadgePreset, defineConfig, presets } from 'sponsorkit'

const ZENHUB_LOGO = (width: number, y: number) => `
<a xlink:href="https://zenhub.com/" class="sponsorkit-link" target="_blank" id="Zenhub">
<svg xmlns="http://www.w3.org/2000/svg" x="${(width - 127.01) / 2}" y="${y}" width="127.01" height="32" viewBox="0 0 512 129"><path fill="#EEEFF3" d="M309.126 39.295c-12.845 0-21.816 8.899-21.816 21.64v22.782c0 2.653 2.14 4.732 4.87 4.732c2.686 0 4.87-2.123 4.87-4.732v-22.96c0-7.72 4.74-12.709 12.076-12.709c7.505 0 12.168 4.87 12.168 12.71v22.959c0 2.653 2.14 4.732 4.871 4.732c2.686 0 4.87-2.123 4.87-4.732V60.936c0-12.742-9.01-21.641-21.91-21.641h.001Zm59.272 0c-6.112 0-10.394 2.213-13.02 4.22v-21.19c0-2.56-2.186-4.643-4.872-4.643c-2.73 0-4.87 2.04-4.87 4.644v61.39c0 2.655 2.14 4.734 4.87 4.734c2.686 0 4.871-2.123 4.871-4.733v-22.96c0-9.37 6.237-12.709 12.074-12.709c7.507 0 12.17 4.87 12.17 12.71v22.959c0 2.654 2.139 4.733 4.87 4.733c2.686 0 4.87-2.123 4.87-4.733V60.936c0-12.742-8.62-21.64-20.964-21.64h.001Zm73.934.178c-2.732 0-4.871 2.04-4.871 4.644v23.047c0 7.84-4.663 12.71-12.166 12.71c-7.335 0-12.074-4.989-12.074-12.71V44.117c0-2.561-2.188-4.644-4.872-4.644c-2.732 0-4.87 2.04-4.87 4.644v22.78c0 12.795 8.968 21.73 21.816 21.73c12.843 0 21.908-8.935 21.908-21.73v-22.78c0-2.561-2.183-4.644-4.871-4.644ZM215.891 79.728l-28.88.005l31.974-31.96c.9-.845 1.395-1.965 1.395-3.153c0-2.46-2.098-4.462-4.677-4.462l-37.529.006c-2.578 0-4.676 2.002-4.676 4.462c0 2.42 2.142 4.463 4.676 4.463h27.303l-31.943 31.777l-.037.039c-.506.554-1.448 1.586-1.448 3.194c0 2.511 2.142 4.554 4.774 4.554h39.068c2.58 0 4.678-2.003 4.678-4.463c0-2.503-2.055-4.463-4.678-4.463v.001Zm270.507-40.643c-6.242 0-12.054 2.03-16.621 5.762V22.115c0-2.56-2.183-4.643-4.867-4.643c-2.732 0-4.872 2.039-4.872 4.643v40.39c-.008.308-.008.618 0 .93v.07h.004c.189 6.347 3.386 13.363 8.185 17.777l.064.061c.36.35.729.69 1.11 1.017l.64.59v-.056c4.467 3.577 10.184 5.523 16.357 5.523C500.75 88.417 512 77.583 512 63.752c0-13.832-11.249-24.666-25.602-24.666Zm16.296 24.666c0 8.923-7.135 15.913-16.24 15.913c-8.85 0-15.792-6.555-16.144-15.201l-.004-1.38c.356-8.691 7.299-15.246 16.148-15.246c9.105 0 16.24 6.99 16.24 15.914Zm-233.253 9.546c-1.633 0-2.672.944-3.677 1.858l-.07.07c-2.059 2.326-5.689 5.097-11.293 5.097c-3.265 0-6.33-.99-8.925-2.872l25.363-25.41c.975-1.07 1.408-2.094 1.408-3.317c0-1.273-.604-2.54-1.645-3.465c-4.136-3.817-10.04-6.007-16.201-6.007c-13.846 0-24.693 10.887-24.693 24.783c0 13.897 10.847 24.783 24.693 24.783c7.25 0 13.906-2.975 18.251-8.149c.794-.907 1.307-2.098 1.307-3.034c0-2.473-1.942-4.337-4.517-4.337Zm-29.065-2.099a17.208 17.208 0 0 1-1.544-7.164c0-9.134 6.838-16.288 15.568-16.288c2.682 0 5.32.76 7.259 2.064l-21.283 21.388Z"/><path fill="#AFD94F" d="m75.047 90.78l18.588 18.831c4.23 4.287 11.2 4.332 15.487.1c4.287-4.23 4.332-11.2.101-15.487l-18.93-19.177H75.048V90.78ZM53.144 37.411l-18.588-18.83c-4.232-4.288-11.2-4.333-15.487-.101c-4.287 4.23-4.332 11.2-.1 15.487l18.928 19.177h15.248V37.41h-.001Z"/><path fill="#38E1FA" d="M37.897 53.144H10.952C4.929 53.144 0 58.072 0 64.096c0 6.023 4.929 10.952 10.952 10.952h26.704l11.002-11.002l-10.76-10.901v-.001Zm79.343 0H90.535L79.533 64.145l10.76 10.902h26.947c6.023 0 10.951-4.928 10.951-10.952s-4.928-10.952-10.951-10.952Z"/><path fill="#515DF4" d="M37.655 75.047L18.772 93.93c-4.259 4.26-4.259 11.23 0 15.488c4.26 4.26 11.23 4.26 15.489 0l18.883-18.883V75.048H37.655Zm52.879-21.903l18.883-18.883c4.26-4.26 4.26-11.228 0-15.488c-4.259-4.26-11.228-4.26-15.487 0L75.047 37.656v15.487h15.487v.001Z"/><path fill="#4BC6CF" d="M75.047 37.656V10.952C75.047 4.929 70.12 0 64.095 0S53.144 4.929 53.144 10.952v26.46l11.002 11.145l10.901-10.9ZM53.144 90.535v26.704c0 6.024 4.927 10.952 10.951 10.952c6.024 0 10.952-4.928 10.952-10.952V90.78L64.044 79.634l-10.9 10.901Z"/><path fill="#50DEB4" d="M53.144 59.559v-6.415H37.898l10.76 10.902zm21.904 9.073v6.415h15.246L79.533 64.145z"/><path fill="#5575F1" d="m75.048 59.601l4.485 4.545l11.002-11.002H75.048zm-21.904 8.99l-4.486-4.546l-11.002 11.003h15.488z"/><path fill="#5073E8" d="m75.047 68.631l4.486-4.486l-4.486-4.544zm-26.389-4.586l4.486 4.546v-9.032z"/><path fill="#38BAA5" d="m68.632 75.047l-4.587 4.587L75.048 90.78V75.047zm-9.073-21.903l4.587-4.587l-11.002-11.146v15.733z"/><path fill="#2AB2C2" d="M75.048 75.048v-6.416l-6.416 6.416zM53.144 53.144v6.415l6.415-6.415z"/><path fill="#2EA7CD" d="M68.673 53.144h6.374V37.656L64.146 48.557zm-9.156 21.903h-6.373v15.488l10.9-10.901z"/><path fill="#2DA5C5" d="m64.045 79.634l4.587-4.587h-9.114zm.101-31.077l-4.587 4.587h9.114z"/><path fill="#2CA7CD" d="M75.047 53.144h-6.374l6.374 6.457zM53.144 75.048h6.373l-6.373-6.457z"/><path fill="#2CA5C8" d="M68.673 53.144h-9.114l-6.415 6.415v9.032l6.373 6.457h9.114l6.416-6.416v-9.031z"/></svg>
</a>
`

const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
}

export default defineConfig({
  github: {
    login: 'phojie',
    type: 'user',
  },
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 7,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: presets.medium,
      composeAfter(compose, _, config) {
        compose
          .addSpan(20)
          .addText('Silver Sponsors', 'sponsorkit-tier-title')
          .addSpan(10)
          .addRaw(ZENHUB_LOGO(config.width!, compose.height))
          .addSpan(65)
      }
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: presets.xl,
    },
    // {
    //   title: 'Special Sponsor',
    //   monthlyDollars: Infinity,
    //   composeAfter(compose, _, config) {
    //     compose
    //       .addSpan(20)
    //       .addText('Special Sponsors', 'sponsorkit-tier-title')
    //       .addSpan(10)
    //       // .addRaw(ZENHUB_LOGO(config.width!, compose.height))
    //       .addSpan(130)
    //   }
    // },
  ]
})