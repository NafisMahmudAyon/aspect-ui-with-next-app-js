import { cn } from '../../utils/cn'

export const CardFooter = ({
  children,
  className = '',
  ...rest
}) => {
  return <div className={cn('px-6 flex items-center', className)} {...rest}>{children}</div>
}
