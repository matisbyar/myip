/*
 * Copyright (C) 2023 Matis Byar. - All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file, in source or binary forms, via any medium,
 * is strictly prohibited.
 *
 * For inquiries or licensing options, please contact:
 * matis@byar.fr
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
