"use client";

import '@staticcms/core/dist/main.css';
import config from './config';
import { useEffect } from 'react';

export default function Admin() {
  useEffect(() => {
    import('@staticcms/core')
      .then((CMS: any) => {
        CMS.default.init({ config });
      });
  }, []);
}
