/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */


// [추가하는 방법]
// 1. npm install --save-dev @ckeditor/{페키지명}
// 2. import Alignment from '@ckeditor/{페키지명}/src/{페키지명}';
// 3. ClassicEditor.builtinPlugins = [ 에 추가
// 4. ClassicEditor.defaultConfig = { toolbar: { items: [ 에 추가
// 5. ClassicEditor.defaultConfig = { 에 별도 옵션 추가
// 6. yarn run build

// [installed]
// npm install --save @ckeditor/ckeditor5-alignment
// npm install --save @ckeditor/ckeditor5-basic-styles
// npm install --save @ckeditor/ckeditor5-font
// npm install --save @ckeditor/ckeditor5-highlight

// [pass]
// @ckeditor/ckeditor5-autosave //추후에 적용
// @ckeditor/ckeditor5-clipboard //추후에 적용


// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';

import './styles.css';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,

	Alignment,
	Underline,
	Strikethrough,
	Font,
	Highlight,

	//unused
	Clipboard,
	Autosave,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'fontFamily',
			'fontSize',
			'|',
			'bold',
			'italic',
			'underline',
			// 'strikethrough',
			'|',
			'highlight',
			'|',
			'alignment:left', 'alignment:center', 'alignment:right',
			'|',
			// 'bulletedList',
			// 'numberedList',
			'link',
			'imageUpload',
			'mediaEmbed',
			'insertTable',
			'blockQuote',
			'|',
			'undo',
			'redo',
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative',
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
		]
	},
	fontFamily: {
		options: [
			'기본값, default',

			'나눔고딕, Nanum Gothic, sans-serif',
			'나눔명조, Nanum Myeongjo, serif',
			// '나눔고딕 코딩, Nanum Gothic Coding, monospace',
			'나눔손글씨 붓, Nanum Brush Script, cursive',
			'나눔손글씨 펜, Nanum Pen Script, cursive',

			'제주고딕, Jeju Gothic, sans-serif',
			'제주한라산, Jeju Hallasan, cursive',
			'제주명조, Jeju Myeongjo, serif',
			
			'노토산스, Noto Sans KR, sans-serif',

			'한나체, Hanna, sans-serif',

			// 'KoPub 바탕, KoPub Batang, serif',

			// 'Arial, Helvetica, sans-serif',
			// 'Courier New, Courier, monospace',
			// 'Georgia, serif',
			// 'Lucida Sans Unicode, Lucida Grande, sans-serif',
			// 'Tahoma, Geneva, sans-serif',
			// 'Times New Roman, Times, serif',
			// 'Trebuchet MS, Helvetica, sans-serif',
			// 'Verdana, Geneva, sans-serif',
		]
	},
	// webpack.config.js에도 수정해야함
	language: 'ko'
};
