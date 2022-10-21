import MuiAvatar from '@mui/material/Avatar'
import { AvatarProps as MuiAvatarProps } from '@mui/material'

export interface AvatarProps extends MuiAvatarProps {
  alt: string
  src: string
}

export const Avatar = ({ alt, src, ...props }: AvatarProps) => {
  return <MuiAvatar alt={alt} src={src} {...props} />
}
