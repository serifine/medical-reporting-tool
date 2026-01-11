import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

import type { PrimeVueConfiguration } from 'primevue'

/**
 * Customization keys for Aura can be found at
 * https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/base/index.ts
 */

const prpThemePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{cyan.50}',
      100: '{cyan.100}',
      200: '{cyan.200}',
      300: '{cyan.300}',
      400: '{cyan.400}',
      500: '{cyan.500}',
      600: '{cyan.600}',
      700: '{cyan.700}',
      800: '{cyan.800}',
      900: '{cyan.900}',
      950: '{cyan.950}',
    },
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
        formField: {
          // background: '#0002',
          background: '{slate.950}',
          disabledBackground: '{slate.900}',
          // borderColor: '#fff1',
          borderColor: '{slate.700}',
          hoverBorderColor: '{slate.600}',
          focusBorderColor: '{primary.700}',
        },
      },
    },
  },
})

const primeVueConfiguration: PrimeVueConfiguration = {
  theme: {
    preset: prpThemePreset,
    options: {
      darkModeSelector: true,
    },
  },
}

export default primeVueConfiguration
