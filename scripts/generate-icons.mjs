/*
 *   Copyright (c) 2022 DSAS Holdings LTD.
 *   All rights reserved.
 */
import {readFileSync, writeFileSync} from 'fs'

const raw = readFileSync('material-icons.json','utf-8');
const icons = JSON.parse(raw)
	.categories.map(c=>c.icons)
	.flat()
	.map(icon=>({
		name: icon.id+'(icon)',
		valueType:'icon name',
		label: icon.name,
		value:icon.ligature,
		icon: `https://storage.googleapis.com/open.natura.dev/vuestic-ui%40dev/material-icons/${icon.ligature}.svg`
	}))
writeFileSync('icons-def.json',JSON.stringify({values:icons},null,'  '));