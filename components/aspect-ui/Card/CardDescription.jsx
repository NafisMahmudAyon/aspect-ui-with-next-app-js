import { cn } from '../../utils/cn'

export const CardDescription = ({
  children,
  className = '',
  ...rest
}) => {
  return <p className={cn("text-sm text-text-muted", className,)
  } {...rest}>{children}</p>
}
