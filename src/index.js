import $ from 'jquery'
import '@css/style.css'
import Post from '@model/post'
import json from '@assets/data'
import logo from '@assets/icon-square-big'

const post = new Post('Webpack Post Title', logo)

$('pre').html(post.toString())
console.log('JSON:', json)