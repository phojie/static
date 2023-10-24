import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'phojie',
    type: 'user',
  },
  width: 800,
  formats: ['json', 'svg', 'png'],
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: 'Backers',
      preset: presets.base,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 7,
      preset: presets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 30,
      preset: presets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 50,
      preset: presets.xl,
    },
  ],
})