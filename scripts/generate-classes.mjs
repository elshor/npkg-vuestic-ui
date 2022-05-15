/*
 *   Copyright (c) 2022 DSAS Holdings LTD.
 *   All rights reserved.
 */
import {readFileSync, writeFileSync} from 'fs'

const list = readFileSync('class-list.txt','utf-8');
const typeList = list.split('\n').map(item=>item.trim()).map(item=>({
	name: item + '(class)',
	title: item + ' (css class)',
	isa:['css class'],
	suggest:{
		tag:'css classes',
		score:'low'
	},
	$generic:'component config',
	$specialized:{
		key:item,
		type:'class',
		value:true,
	}
}))
writeFileSync('class-def.json',JSON.stringify({types:typeList},null,'  '));