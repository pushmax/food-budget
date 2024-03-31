import { SCREEN_SIZES_CONFIG } from '@shared/styling/configs/screen_sizes.config';
import { useMedia } from '@shared/styling/ui/use_media/use_media.hook';
import * as React from 'react';


type Props = {
  className?: string;
};

export default function Header({ className = '' } : Props): React.JSX.Element {
  const screens = useMedia(SCREEN_SIZES_CONFIG);

  return (
    <>
      {screens.small && <p className={className} >Small Header</p>}
      {screens.medium && <p className={className} >Medium Header</p>}
      {screens.large && <p className={className} >Large Header</p>}
    </>
  );
}