import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  /* Normalize */
	button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0} menu,article,aside,details,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{}button,select{text-transform:none}[type=submit], [type=reset],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}

  /**
	 * Set up a decent box model on the root element
	 */
	html {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

  /**
	 * Make all elements from the DOM inherit from the parent box-sizing
	 * Since * has a specificity of 0, it does not override the html value
	 * making all elements inheriting from the root box-sizing value
	 * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
	 */
	*, *::before, *::after {
		box-sizing: inherit;
	}

	body {
		background-image: url('/img/cream_pixels.png');
		background-repeat: repeat;
		margin: 0;
		padding: 0;
  }
  
  body, input, button {font-family: 'Cairo', sans-serif !important; }
`;

export const theme = {
  fastTransition: `all 0.15s ease-in-out`,
  transition: `all 0.3s ease-in-out`,

  // colors
  primaryColor: 'linear-gradient(to right, #eecda3, #ef629f);',
  errorColor: 'tomato',
  headerBackground: 'linear-gradient(to bottom, #d9afd9 0%, #97d9e1 100%);',
  formBackground:
    'linear-gradient(19deg, rgba(250, 172, 168, 0.1) 0%, rgba(221, 214, 243, 0.1) 100%);',

  primaryBtn: 'linear-gradient(19deg, #d9afd9 0%, #97d9e1 100%);',

  // Font
  smallFont: '0.8rem',

  // input
  inputBorder: 'linear-gradient(to right, #eecda3, #ef629f);',
  inputErrorBorder:
    'linear-gradient(center bottom, rgb(14,173,173) 33%, rgb(0,255,255) 67% );'
};
