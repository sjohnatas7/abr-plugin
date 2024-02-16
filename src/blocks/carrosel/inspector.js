/**
 * WordPress dependencies
 */
const { __ } = require('@wordpress/i18n');
const {
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
	BlockControls,
} = require('@wordpress/block-editor');
const {
	PanelBody,
	BaseControl,
	ColorPalette,
	ToolbarGroup,
	ToolbarButton,
} = require('@wordpress/components');

const Inspector = ({ attributes, setAttributes }) => {
	const { gallery, backgroundColor, maxHeight, padding } = attributes;

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						onClick={() => setAttributes({ gallery: [] })}
						icon="trash"
					></ToolbarButton>
					<MediaUploadCheck>
						<MediaUpload
							multiple={true}
							gallery={true}
							onSelect={(media) =>
								setAttributes({ gallery: media })
							}
							allowedTypes={['image']}
							value={gallery?.map((image) => image.id) || ''}
							render={({ open }) => (
								<ToolbarButton onClick={open} icon="edit" />
							)}
						></MediaUpload>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__('Block Settings', 'boilerplate')}>
					<BaseControl
						id="height"
						label={__('Height', 'boilerplate')}
					>
						<input
							type="number"
							value={maxHeight}
							onChange={(e) =>
								setAttributes({ maxHeight: e.target.value })
							}
						/>
					</BaseControl>
					<BaseControl
						id="padding"
						label={__('Padding', 'boilerplate')}
					>
						<input
							type="number"
							value={padding}
							onChange={(e) =>
								setAttributes({ padding: e.target.value })
							}
						/>
					</BaseControl>
				</PanelBody>

				<PanelBody title={__('Carrosel Block Settings', 'boilerplate')}>
					<BaseControl
						label={__('Background Color', 'boilerplate')}
						id="color"
					>
						<ColorPalette
							colors={[
								{ name: 'red', color: '#f00' },
								{ name: 'white', color: '#fff' },
								{ name: 'blue', color: '#00f' },
							]}
							value={backgroundColor}
							onChange={(v) =>
								setAttributes({ backgroundColor: v })
							}
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
