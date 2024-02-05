/**
 * WordPress dependencies
 */
const { __ } = require('@wordpress/i18n');
const { InspectorControls, MediaUploadCheck, MediaUpload, Toolbar } = require('@wordpress/block-editor');
const { PanelBody, BaseControl, ColorPalette, ToolbarGroup, ToolbarButton } = require('@wordpress/components');

const Inspector = ({ attributes, setAttributes }) => {
	const { gallery, backgroundColor } = attributes;

	return (
		<InspectorControls>
			<ToolbarGroup>
				<ToolbarButton onClick={()=> setAttributes({gallery: []})} icon="trash"></ToolbarButton>
				{/* <MediaUploadCheck>
					<MediaUpload
						multiple={true}
						gallery={true}
						onSelect={(media)=>setAttributes({gallery: media})}
						allowedTypes={['image']}
						value={gallery.map((image)=> image.id)}
						render={({open})=>(
							<ToolbarButton onClick={open} icon="edit"/>
						)}
						>
					</MediaUpload>
				</MediaUploadCheck> */}
			</ToolbarGroup>
			<PanelBody title={__('Carrosel Block Settings', 'boilerplate')}>
				<BaseControl label={__('Background Color', 'boilerplate')} id="color">
					<ColorPalette
						colors={[
							{ name: 'red', color: '#f00' },
							{ name: 'white', color: '#fff' },
							{ name: 'blue', color: '#00f' },
						]}
						value={backgroundColor}
						onChange={(v) => setAttributes({ backgroundColor: v })}
					/>
				</BaseControl>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
