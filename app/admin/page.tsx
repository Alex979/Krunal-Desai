"use client";

import CMS from '@staticcms/core';
import '@staticcms/core/dist/main.css';
import config from './config';
import { useEffect } from 'react';

export default function Admin() {
  useEffect(() => {
    CMS.init({ config });
  }, []);
}
