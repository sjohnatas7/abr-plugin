/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Save function
 */

export default function save({ attributes }) {
	const { uniqueId, gallery } = attributes;

	// Block Props
	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	return (
		<div {...blockProps}>
			<div className="gallery_container">
				<div className="gallery_wrapper">
					{gallery &&
						gallery.map((image, index) => (
							<div className="single_gallery_image" key={index}>
								<img src={image.url} alt={image.alt} />
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
