/**
 * WordPress dependencies
 */
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';


// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
	const { uniqueId, blockStyle, gallery, backgroundColor } = attributes;

	// Unique ID
	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: 'abr-' + clientId.slice(0, 8),
			});
		}
	}, []);

	// Block Props
	const blockProps = useBlockProps({
		className: uniqueId,
	});

	/**
	 * Block Styles
	 */
	const deskStyles = `
		.${uniqueId}{
			background: ${backgroundColor};
		}
	`;
	const tabStyles = ``;
	const mobStyles = ``;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;

	// Set Block Styles
	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);

	return (
		<Fragment>
		  <style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
		  <Inspector attributes={attributes} setAttributes={setAttributes} />
		  <div {...blockProps}>
			{gallery ? (
			  <div className='gallery_container'>
				  <div className='gallery_wrapper'>
					{gallery.map((image, index) => (
					<div className='single_gallery_image' key={index}>
						<img src={image.url} alt={image.alt} />
					</div>
					))}
					</div>
			  </div>
			) : (
			  <MediaPlaceholder
				onSelect={(v) => setAttributes({ gallery: v })}
				allowedTypes={['image']}
				multiple={true}
				labels={{ title: 'Add Images' }}
			  ></MediaPlaceholder>
			)}
		  </div>
		</Fragment>
	  );
	  
}
