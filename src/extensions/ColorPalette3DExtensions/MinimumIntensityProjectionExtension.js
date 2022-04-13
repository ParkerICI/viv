import ColorPalette3DExtension from './ColorPalette3DExtension';
import rendering from './rendering-modes';
import { RENDERING_MODES as RENDERING_NAMES } from '../../constants';

/**
 * This deck.gl extension allows for a color palette to be used for rendering in 3D with Minimum Intensity Projection.
 * */
const MinimumIntensityProjectionExtension = class extends ColorPalette3DExtension {
  constructor(args) {
    super(args);
    this.opts.rendering = rendering[RENDERING_NAMES.MIN_INTENSITY_PROJECTION];
  }
};

MinimumIntensityProjectionExtension.extensionName =
  'MinimumIntensityProjectionExtension';

export default MinimumIntensityProjectionExtension;