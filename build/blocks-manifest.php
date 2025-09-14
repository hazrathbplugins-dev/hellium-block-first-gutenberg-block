<?php
// This file is generated. Do not modify it manually.
return array(
	'animated-heading' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/animated-heading',
		'version' => '0.1.0',
		'title' => 'Animated Heading',
		'category' => 'widgets',
		'icon' => 'editor-textcolor',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => 'h2'
			),
			'level' => array(
				'type' => 'number',
				'default' => 2
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#121212'
			)
		),
		'textdomain' => 'hellium-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'hellium-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/hellium-block',
		'version' => '0.1.0',
		'title' => 'Hellium Block',
		'category' => 'widgets',
		'icon' => 'editor-textcolor',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'spacing' => array(
				'margin' => true,
				'padding' => true,
				'blockGap' => true
			),
			'background' => array(
				'backgroundImage' => true,
				'backgroundSize' => true
			),
			'anchor' => true,
			'align' => array(
				'left',
				'right'
			)
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => 'h2'
			),
			'level' => array(
				'type' => 'number',
				'default' => 2
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#121212'
			)
		),
		'textdomain' => 'hellium-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
