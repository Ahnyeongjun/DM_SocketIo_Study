import { createGlobalStyle } from 'styled-components';
import {
    NotoSansKRFont_Regular,
    NotoSansKRFont_Thin,
    NotoSans,
    NotoSans_Bold,
    NotoSans_Thin,
    NotoSansKRFont_Bold,
} from './fonts';
export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: NotoSansKR_Thin;
        src: url(${NotoSansKRFont_Thin});
    } 
    @font-face {
        font-family: NotoSansKR;
        src: url(${NotoSansKRFont_Regular});
    }
    @font-face {
        font-family: NotoSansKRFont_Bold;
        src: url(${NotoSansKRFont_Bold});
    }
    @font-face {
        font-family: NotoSans;
        src:url(${NotoSans});
    }
    @font-face{
        font-family: NotoSans_Bold;
        src:url(${NotoSans_Bold})
    }
    @font-face {
        font-family: NotoSans_Thin;
        src: url(${NotoSans_Thin});
    }
      * {
    font-family:NotoSansKR !important;
    }
    *::-webkit-scrollbar {
        display: none;
    }
    #root {
        /* height: 100%; */
    }
    html {
        /* height: 100%; */
    }
    body {
        /* height: 100%; */
        background-color:#FAFAFA;
    }
li,ol,ul{
    list-style: none
}
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
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        /* overscroll-behavior-y: contain; */
    }
    ol, ul {
        list-style: none;
    }
    blockquote,
     q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button {
    
        cursor:pointer;
        outline:none;
    }
    html{

    }
`;
