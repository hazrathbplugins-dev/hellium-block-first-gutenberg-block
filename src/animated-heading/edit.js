/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, BlockControls, InspectorControls, RichText, PanelColorSettings } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { ToolbarGroup, ToolbarButton, PanelBody, TextControl, SelectControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { content, level, textColor } = attributes;

	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="image-rotate-right"
						label={ __( 'Change Text Color', 'hellium-block' ) }
						onClick={ () => console.log( 'Change Text Color' ) }
					/>
					<ToolbarButton
						icon="trash"
						label={ __( 'Remove Block', 'hellium-block' ) }
						onClick={ () => console.log( 'Remove Block' ) }
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody
					title={ __( 'Settings', 'hellium-block' ) }
					initialOpen={ true }
					icon="admin-generic"
				/>
				<TextControl
					label="Enter Text"
					onChange={ (v) => console.log(v) }
				/>
				<SelectControl
					label="Heading Level"
					value={level}
					options={[
						{ label: 'H1', value: 1 },
						{ label: 'H2', value: 2 },
						{ label: 'H3', value: 3 },
						{ label: 'H4', value: 4 },
						{ label: 'H5', value: 5 },
						{ label: 'H6', value: 6 },
					]}
					onChange={(val) =>
						setAttributes({ level: parseInt(val) })
					}
				/>
				<PanelColorSettings
                    title={__('Color Settings', 'hellium-block')}
                    colorSettings={[
                        {
                            value: textColor,
                            onChange: (color) => setAttributes({ textColor: color }),
                            label: __('Text Color', 'hellium-block'),
                        },
                    ]}
                />
			</InspectorControls>

			<div { ...useBlockProps() } >
				<RichText
					tagName={`h${level}`}
					value={content}
					onChange={(val) => setAttributes({ content: val })}
					placeholder="Write heading…"
					style={{ color: textColor || undefined }}
				/>
			</div>
		</Fragment>
	);
}
