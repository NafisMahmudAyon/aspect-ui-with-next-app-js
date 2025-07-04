import { cn } from '../../utils/cn'

export const CardTitle = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <h3 className={cn(
      "leading-none font-semibold",
      className
    )} {...rest}>
      {children}
    </h3>
  )
}
