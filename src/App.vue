v<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
        	return {
        		indexPage:[]
            }
        }
    }
</script>

<style>
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 12px;
        font-family: "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a:link{
        text-decoration: none;
        color: #343434;
    }a:hover {
         text-decoration: none;
         color: #343434;
     }
    a:active{
        text-decoration: none;
        color: #343434;
    }
    a:visited{
        text-decoration: none;
        color: #343434;
    }
    .clearfix:after{
        content: '.';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
</style>
